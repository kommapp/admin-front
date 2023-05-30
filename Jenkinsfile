pipeline {
  agent any
  stages {
    stage('Build & Push') {
      steps {
        script {
            docker.withRegistry("https://registry.digitalocean.com","${env.CREDENTIALS_ID}") {
                docker.build("registry.digitalocean.com/${env.PROJECT_ID}/${env.IMAGEN_NAME}:${env.BUILD_ID}","--build-arg APP_ENV=prod -f Dockerfile .")
                sh "docker push registry.digitalocean.com/${env.PROJECT_ID}/${env.IMAGEN_NAME}:${env.BUILD_ID}"
                sh "docker rmi registry.digitalocean.com/${env.PROJECT_ID}/${env.IMAGEN_NAME}:${env.BUILD_ID}"
            }
        }
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh "sed -i 's/${env.IMAGEN_NAME}:latest/${env.IMAGEN_NAME}:${env.BUILD_ID}/g' deployment.yaml"
        withKubeConfig([credentialsId: "${env.CLUSTER_CREDENTIALS_ID}"]) {
             sh 'kubectl apply -f deployment.yaml'
        }
      }
    }

    stage('Clean Build') {
      steps {
        deleteDir()
      }
    }

  }
  environment {
    PROJECT_ID = 'komm'
    CLUSTER_CREDENTIALS_ID = 'DOKUBE'
    CREDENTIALS_ID = 'DOCR'
    IMAGEN_NAME = 'komm-admin'
  }
}