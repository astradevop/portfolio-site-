#!/usr/bin/env python3
"""
Simple HTTP server to serve the built dist/ directory.
This is useful for testing the production build locally.

Usage:
    python serve.py

The server will start on http://localhost:8000
"""

import http.server
import socketserver
import os
import sys

# Change to the directory containing this script
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Check if dist/ directory exists
if not os.path.exists('dist'):
    print("Error: dist/ directory not found.")
    print("Please run 'npm run build' first to create the dist/ directory.")
    sys.exit(1)

# Change to dist/ directory to serve its contents
os.chdir('dist')

PORT = 8000

class Handler(http.server.SimpleHTTPRequestHandler):
    """Custom handler to serve files with proper MIME types."""
    
    def end_headers(self):
        # Add CORS headers if needed
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

try:
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Server started at http://localhost:{PORT}/")
        print("Press Ctrl+C to stop the server")
        httpd.serve_forever()
except KeyboardInterrupt:
    print("\nServer stopped.")
    sys.exit(0)
except OSError as e:
    if e.errno == 98 or e.errno == 48:  # Address already in use
        print(f"Error: Port {PORT} is already in use.")
        print("Please close the application using that port or change the PORT in serve.py")
    else:
        print(f"Error: {e}")
    sys.exit(1)

