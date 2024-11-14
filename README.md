# session-03-cicd

release stage

```
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
```
