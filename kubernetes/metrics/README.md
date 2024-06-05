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
helm update
helm install metrics-server --namespace kube-system --version 3.11.0 metrics-server/metrics-server \
--set "args[0]=--kubelet-insecure-lts"
```

## Metrics Terraform Intallation

```
resource 'helm_release" "metrics_server" {
    name = "metrics-server"

    repository = "https://kubernetes-sigs.github.io/metrics-server/"
    chart      = "metrics-server"
    namespace  = "kube-system"
    version    = "3.11.0"

    set {
        name  = "args[0]"
        value = "-kubelet-insecure-lts"
    }
}
```