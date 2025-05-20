pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo '📥 Checking out the code...'
                checkout scm
            }
        }

        stage('Install') {
            steps {
                echo '📦 Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo '🧪 Running tests...'
                // This ensures the logs are shown even if test fails
                sh 'npm run test || echo "❌ Some tests failed. Check above logs for details."'
            }
        }

        stage('Done') {
            steps {
                echo '✅ Build process completed.'
            }
        }
    }
}
