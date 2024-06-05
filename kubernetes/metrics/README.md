# Metrics

## Helm Repo

```
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
chmod 700 get_helm.sh
./get_helm.sh
```

## Metrics Helm Installation

```
helm repo add metrics-server https://kubernetes-sigs.github.io/metrics-server/
helm repo update
helm install metrics-server metrics-server/metrics-server --namespace kube-system --set args[0]=--kubelet-insecure-tls
```

## Metrics Terraform Intallation

To install terraform, please follow the orginal documentation 
url : https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli

```
terraform init
terraform apply
```