![task manager](https://github.com/user-attachments/assets/5903e1ff-c3fc-4a7e-bf29-0b5a7eb97d46)

Task Manager - Deployment Commands
1️⃣ Installing Docker and Docker Compose
sudo apt update && sudo apt upgrade -y  # Update system packages
sudo apt install -y docker.io  # Install Docker
sudo systemctl start docker  # Start Docker service
sudo systemctl enable docker  # Enable Docker on boot
docker --version  # Verify Docker installation


sudo apt install -y docker-compose  # Install Docker Compose
docker-compose --version  # Verify Docker Compose installation

________________
2️⃣ Setting Up Docker and Docker Compose
A) Building and Running the Containers
docker-compose up --build -d  # Build and run in detached mode
B) Checking Running Containers
docker ps  # List running containers
docker-compose ps  # Check status of services
C) Stopping and Removing Containers
docker-compose down  # Stop and remove all services
D) Cleaning Up Docker Resources
docker system prune -a --volumes  # Remove unused Docker resources

________________
3️⃣ Creating and Downloading Files via cURL
nano compose.yml  # Create the file first
curl -s https://raw.githubusercontent.com/derek-hash/SYS-265-02/refs/heads/Docker-Project/Docker-Project-Compose.yml > compose.yml
cat compose.yml  # Verify contents


nano requirements.txt
curl -s https://raw.githubusercontent.com/derek-hash/SYS-265-02/refs/heads/Docker-Project/Docker-Project-requirements.txt > requirements.txt
cat requirements.txt


nano backend-app.py
curl -s https://raw.githubusercontent.com/derek-hash/SYS-265-02/refs/heads/Docker-Project/backend-app.py > backend-app.py
cat backend-app.py


nano frontend-app.js
curl -s https://raw.githubusercontent.com/derek-hash/SYS-265-02/refs/heads/Docker-Project/frontend-app.js > frontend-app.js
cat frontend-app.js


nano frontend-index.html
curl -s https://raw.githubusercontent.com/derek-hash/SYS-265-02/refs/heads/Docker-Project/frontend-index.html > frontend-index.html
cat frontend-index.html


nano backend-dockerfile
curl -s https://raw.githubusercontent.com/derek-hash/SYS-265-02/refs/heads/Docker-Project/backend-dockerfile > backend-dockerfile
cat backend-dockerfile


nano frontend-dockerfile
curl -s https://raw.githubusercontent.com/derek-hash/SYS-265-02/refs/heads/Docker-Project/frontend-Dockerfile > frontend-Dockerfile
cat frontend-Dockerfile

________________
1️⃣ Creating and Managing Directories
A) Creating Required Directories
Create the main project and backup directories:

sh
Copy
Edit
mkdir -p /home/champuser/task-manager
mkdir -p /home/champuser/task-manager-backups
B) Navigating to the Project Directory
Move into the project directory:

sh
Copy
Edit
cd /home/champuser/task-manager
C) Moving Files to Backups
Move a backup file to the backup directory:

sh
Copy
Edit
mv /home/champuser/task-manager/somefile.bak /home/champuser/task-manager-backups/
D) Checking Directory Structure
List files in the user home and project directories:

sh
Copy
Edit
ls /home/champuser/
ls /home/champuser/task-manager/
2️⃣ Docker Management
E) Viewing Docker Logs
Check logs for running services:

sh
Copy
Edit
docker-compose logs
F) Rebuilding Frontend & Backend Services
Rebuild and start the application:

sh
Copy
Edit
docker-compose up --build
G) Checking if Ports are Open
Verify if the required ports (8080 & 5000) are in use:

sh
Copy
Edit
netstat -tulnp | grep :8080
netstat -tulnp | grep :5000
H) Updating Docker Compose
Update Docker Compose to the latest version:

sh
Copy
Edit
sudo rm /usr/local/bin/docker-compose
sudo curl -L "https://github.com/docker/compose/releases/download/latest/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
I) Restarting the Application
Stop and restart the application:

sh
Copy
Edit
docker-compose down
docker-compose up --build
3️⃣ Troubleshooting & Fixes
J) Troubleshooting Docker Containers
Check Logs for Issues:
sh
Copy
Edit
docker-compose logs frontend  # Check frontend logs  
docker logs task_manager_frontend  # Get detailed frontend logs  
Check if Frontend Exists:
sh
Copy
Edit
docker ps -a | grep task_manager_frontend
K) Fixing Port Conflicts
Check if Port 80 is in Use:
sh
Copy
Edit
sudo netstat -tulnp | grep :80
Stop Apache if Running:
sh
Copy
Edit
sudo systemctl stop apache2
4️⃣ Manual File Creation & Editing
L) Creating Directories & Files
Create a Frontend Directory:
sh
Copy
Edit
mkdir -p ~/task-manager/frontend
Create an HTML File for the Frontend:
sh
Copy
Edit
nano ~/task-manager/frontend/index.html
________________
[READ ME.txt](https://github.com/user-attachments/files/18804705/READ.ME.txt)
