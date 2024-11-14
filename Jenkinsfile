pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Going to install project dependencies'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Going to test the application'
                sh 'npm run test:ci'
            }
        }
        stage('Release') {
            when {
                allOf {
                    branch 'main'
                    changelog '^(?!v1.1).*'
                }
            }
            steps {
                echo 'Build on main branch - Going to release'
                sh 'yarn version --patch'
                
            }
        }
    }
    post {
        always {
            junit testResults: 'junit.xml'
        }
    }
}
