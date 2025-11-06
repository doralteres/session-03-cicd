pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Going to install project dependencies'
                nodejs('NODE 23') {
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Going to test the application'
                nodejs('NODE 23') {
                    sh 'npm run test:ci'
                }
            }
        }
    }
    post {
        always {
            junit testResults: 'junit.xml'
        }
    }
}
