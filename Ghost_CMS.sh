echo "Testing Ghost API..."
response=$(curl -s http://172.16.1.5:2368/ghost/api/v3/content/settings/)
if [[ $response == *"title"* ]]; then
  echo "API test passed: Settings retrieved successfully"
else
  echo "API test failed"
  exit 1
fi