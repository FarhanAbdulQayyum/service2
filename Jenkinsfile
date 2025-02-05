pipeline {
    agent any  // Runs on any available Jenkins agent

        stage('Deploy') {
            steps {
                sh 'echo "Deploying to production server..."'
                // Add deployment commands (e.g., copy build files to server)
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
