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
        stage('Release') {
            when {
                allOf {
                    branch 'main'
                    changelog '^(?!1.1).*'
                }
            }
            steps {
                echo 'Build on main branch - Going to release'
                nodejs('NODE 23') {
                    withCredentials([gitUsernamePassword(credentialsId: 'doralteres', gitToolName: 'Default')]) {
                        sh 'npm version patch'
                    }
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
