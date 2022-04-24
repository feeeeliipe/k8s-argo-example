# K8s + ArgoCD

Example of a deployment using Kubernetes and ArgoCD

## Application

To build the docker images for the application use the following commands:

Build blue image
```
npm run build:docker:blue
```

Build green image
```
npm run build:docker:green
```

## Deploying the application manually to K8s

```
kubectl apply -f k8s/api.yaml
```

To access the application running within the k8s cluster, use the following command to forward the port traffic to the cluster
```
kubectl port-forward deployment/api 3000:3000
```