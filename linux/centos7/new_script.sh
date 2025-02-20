#!/bin/bash

# Check if a username is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <username>"
    exit 1
fi

USERNAME=$1
SSH_DIR="/home/$USERNAME/.ssh"
AUTHORIZED_KEYS="$SSH_DIR/authorized_keys"

# Create the user if it does not exist
if ! id "$USERNAME" &>/dev/null; then
    echo "Creating user $USERNAME..."
    sudo useradd -m -s /bin/bash "$USERNAME"
else
    echo "User $USERNAME already exists."
fi

# Ensure the .ssh directory exists
sudo mkdir -p "$SSH_DIR"
sudo chmod 700 "$SSH_DIR"
sudo chown "$USERNAME":"$USERNAME" "$SSH_DIR"

# Generate SSH key if not exists (run this on web01)
if [ ! -f ~/.ssh/id_rsa.pub ]; then
    echo "Generating SSH key pair..."
    ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa -N ""
fi

# Copy the public key to authorized_keys
echo "Copying public key to $AUTHORIZED_KEYS..."
sudo cp ~/.ssh/id_rsa.pub "$AUTHORIZED_KEYS"
sudo chmod 600 "$AUTHORIZED_KEYS"
sudo chown "$USERNAME":"$USERNAME" "$AUTHORIZED_KEYS"

# Disable root SSH login
echo "Disabling root SSH login..."
sudo sed -i 's/^#PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config
sudo sed -i 's/^PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config

# Restart SSH service
echo "Restarting SSH service..."
sudo systemctl restart ssh

echo "User $USERNAME is now set up for passwordless SSH login."
