if [[ $response == *"title"* ]]; then
    echo "API test passed: Settings retrieved successfully"
else
    echo "API test failed"
    exit 1
fi
