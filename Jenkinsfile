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
                git pull
                npm i
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
