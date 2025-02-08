pipeline {
    agent any  // Runs on any available Jenkins agent

    options {
        skipDefaultCheckout(true)  // Prevents Jenkins from running checkout scm
    }

    stages {
        stage('Deploy') {
            steps {
                sh """
                ssh -tt -p 22 ec2-user@172.31.39.206 << 'EOF'
                cd ~/projects/service2

                # Find and stop the running Node.js process
                NODE_PID=\$(pgrep -f "node server.js")
                if [ ! -z "\$NODE_PID" ]; then
                    echo "Stopping running Node.js process with PID: \$NODE_PID"
                    kill -9 \$NODE_PID
                else
                    echo "No running Node.js process found."
                fi


                git pull
                
                # Restart Node.js server
                nohup node server.js > output.log 2>&1 &
                echo "Node.js server restarted successfully!"
                exit 0  # Ensure SSH session exits cleanly
                EOF
                """
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully! 🎉"
        }
        failure {
            echo "Pipeline failed! ❌"
        }
    }
}
