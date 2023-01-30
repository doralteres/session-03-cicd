# session-03-cicd

release stage

```
 stage('Release') {
            when {
                allOf {
                    branch 'main'
                    changelog '^(?!v1.0).*'
                }
            }
            steps {
                echo 'Build on main branch - Going to release'
                sh 'yarn version --patch'
            }
        }
```

