pipeline {
    agent any  // Runs on any available Jenkins agent

    stages {
        stage('Deploy') {
            steps {
                sh """
                ssh -tt -p 22 ec2-user@localhost << 'EOF'
                cd ~/projects/service2
                git pull
                node server.js
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
