pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'my-react-app'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/zulhwk/maxima.git'
            }
        }

        stage('Build') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE)
                }
            }
        }

        stage('Test') {
            steps {
                sh 'docker run --rm ${DOCKER_IMAGE} make test'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker push ${DOCKER_IMAGE}'
                // Command untuk deploy ke production atau environment lain
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
