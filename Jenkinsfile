pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Going to install project dependencies'
                sh 'yarn'
            }
        }
        stage('Test') {
            steps {
                echo 'Going to test the application'
                sh 'yarn test:ci'
            }
        }
    }
    post {
        always {
            junit testResults: 'junit.xml'
        }
    }
}
