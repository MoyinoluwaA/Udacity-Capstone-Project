[![CircleCI](https://dl.circleci.com/status-badge/img/gh/MoyinoluwaA/Udacity-DevOps-Capstone-Project/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/MoyinoluwaA/Udacity-DevOps-Capstone-Project/tree/master)

## UDACITY DEVOPS CAPSTONE PROJECT
This project creates a CI/CD pipeline for a NodeJS aplication, in which the application is containerized and deployed to the kubernetes cluster.

### STEPS TAKEN
- Connect Application to CIRCLECI
- Create IAM role for the Cluster and the Node Group in AWS Console. 
    Policies required for the cluster:
        - AmazonEKSClusterPolicy
    Policies required for the worker nodes: 
        - AmazonEKSWorkerNodePolicy
        - AmazonEC2ContainerRegistryReadOnly
        - AmazonEKS_CNI_Policy
- Write network creation and kubernetes cluster creation scripts using cloudformation templates
- Write another cloudformation template for creating ec2 instance to manage the cluster
- Create ansible plays to configure server and configure cluster. This runs just once in an aws account.
- Also, create ansible play to get the load balancer dns and deploy application to cluster
- Write CI pipeline to lint, test, scan, build and push docker image to ECR.

### TOOLS USED
- Ansible
- CloudFormation
- CircleCI
- Elastic Container Registry (ECR)
- Elastic Kubernetes Service (EKS)
