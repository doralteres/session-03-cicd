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
                publish 'junit.xml'
            }
        }
        stage('Release') {
            when {
                branch 'main'
                changelog '^v1\.0\..*'
            }
            steps {
                echo 'Build on main branch - Going to release'
                sh 'yarn version --patch'
            }
        }
    }
}
