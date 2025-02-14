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
4️⃣ Setting Up GitHub Repository
git init  # Initialize Git in the project directory
git remote add origin https://github.com/derek-hash/task-manager-docker.git
git branch -M main  # Ensure main branch is used
Adding and Committing Files
git add .  # Add all files
git commit -m "Added project files from cURL downloads and verified contents"
git push -u origin main  # Push changes to GitHub

________________
5️⃣ Additional Useful Commands
A) Creating Directories
mkdir -p /home/champuser/task-manager
mkdir -p /home/champuser/task-manager-backups
B) Navigating to the Project Directory
cd /home/champuser/task-manager
C) Moving Files to Backups
mv /home/champuser/task-manager/somefile.bak /home/champuser/task-manager-backups/
D) Checking Directory Structure
ls /home/champuser/
ls /home/champuser/task-manager/
E) Viewing Docker Logs
docker-compose logs
F) Rebuilding the Frontend & Backend Services
docker-compose up --build
G) Checking if Ports are Open
netstat -tulnp | grep :8080
netstat -tulnp | grep :5000
H) Updating Docker Compose
sudo rm /usr/local/bin/docker-compose
sudo curl -L "https://github.com/docker/compose/releases/download/latest/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
I) Restarting the Application
docker-compose down
docker-compose up --build
J) Troubleshooting Docker Containers
docker-compose logs frontend  # Check frontend logs
docker logs task_manager_frontend  # Get detailed frontend logs
docker ps -a | grep task_manager_frontend  # Check if frontend exists
K) Fixing Port Conflicts
sudo netstat -tulnp | grep :80  # Check if port 80 is in use
sudo systemctl stop apache2  # Stop Apache if running
L) Manual File Creation
mkdir -p ~/task-manager/frontend
nano ~/task-manager/frontend/index.html  # Create frontend HTML file
[READ ME.txt](https://github.com/user-attachments/files/18804705/READ.ME.txt)
