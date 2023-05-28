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
                junit testResults: 'junit.xml'
            }
        }
         stage('Release') {
            when {
                allOf {
                    branch 'main'
                    changelog '^(?!v1.0).*'
                }
            }
            steps {
                withCredentials([gitUsernamePassword(credentialsId: 'doralteres_gh_token', gitToolName: 'Default')]) {
                    echo 'Build on main branch - Going to release'
                    sh 'yarn version --patch'
                }
            }
        }
    }
}
