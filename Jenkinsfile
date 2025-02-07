pipeline {
    agent any  // Runs on any available Jenkins agent

    stages {
        stage('Deploy') {
            steps {
                sh 'echo "Deploying to production server..."'
                // Add deployment commands (e.g., copy build files to server)
            }
            steps {
                ssh ec2-user@localhost "
                    cd ~/projects/service2 &&
                    git pull &&
                    node server.js
                "

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
