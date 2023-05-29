# session-03-cicd

release stage

```
         stage('Release') {
            when {
                allOf {
                    branch 'main'
                    changelog '^(?!v1.1).*'
                }
            }
            steps {
                withCredentials([gitUsernamePassword(credentialsId: 'doralteres_gh_token', gitToolName: 'Default')]) {
                    echo 'Build on main branch - Going to release'
                    sh 'yarn version --patch'
                }
            }
        }
```
