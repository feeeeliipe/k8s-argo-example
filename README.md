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
kubectl apply -f api/k8s/api.yaml
```

To access the application running within the k8s cluster, use the following command to forward the port traffic to the cluster
```
kubectl port-forward deployment/api 3000:3000
```

## Installing ArgoCI on K8s Cluster

```
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

## Access ArgoCD Dashboard

```
kubectl patch svc argocd-server -n argocd -p '{"spec": {"type": "LoadBalancer"}}'
kubectl port-forward svc/argocd-server -n argocd 8080:443
```

## Getting Dashboard password

Use the following command to access argocd dashboard with the admin user
```
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo
```

## Creating the application within ArgoCD

```
kubectl apply -f argocd/api-application.yaml
```

## Access the API running within K8s cluster on ArgoCD namespace

```
kubectl port-forward deployment/api 3000:3000 -n argocd
```