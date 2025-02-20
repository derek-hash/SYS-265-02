#!/bin/bash
# Script to harden SSH and create a passwordless user

USER=$1
if [ -z "$USER" ]; then
    echo "Usage: $0 username"
    exit 1
fi

# Create user if it doesn't exist
id -u $USER &>/dev/null || sudo useradd -m -s /bin/bash $USER

# Create .ssh directory
sudo mkdir -p /home/$USER/.ssh
sudo chmod 700 /home/$USER/.ssh

# Copy public key to authorized_keys
sudo cp /path/to/public/key.pub /home/$USER/.ssh/authorized_keys
sudo chmod 600 /home/$USER/.ssh/authorized_keys
sudo chown -R $USER:$USER /home/$USER/.ssh

# Restart SSH service
sudo systemctl restart ssh
echo "User $USER created for passwordless SSH login."
