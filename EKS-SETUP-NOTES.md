# AWS EKS Kubernetes Setup - Raw Commands

Just paste your terminal commands and output here as you work. I'll organize them into a tutorial later.

---

## Paste Everything Below

Environment details:
Environment
Reservation ID
69710b04d9fc28e6358e7313

Type
AWS
Request method
ce-aws-eks
Transaction ID
59b5beb2-9f9a-4254-b4d9-fd3317467558
Cloud Account
ITZ
Geo
any
Region
us-east-1
Datacenter
us-east-1
Customer data
false
Environment
Idle runtime limit
10800
Timeout action
Reservation Details
AWS_ACCESS_KEY_ID
AKIAQAKLJF75ATXDSYEX
AWS_SECRET_ACCESS_KEY
••••••••••••••••••••••••••••••••••••••••


Download Kubernetes config by AWS CLI
aws eks update-kubeconfig --region us-east-1 --name itzeks-662003sh3b-z6q66xod

```
[Paste your terminal session here - commands and output for EKS setup]


➜  K8s export AWS_ACCESS_KEY_ID=ID
➜  K8s export AWS_SECRET_ACCESS_KEY=SECRET
➜  K8s aws eks update-kubeconfig --region us-east-1 --name itzeks-662003sh3b-z6q66xod

Added new context arn:aws:eks:us-east-1:000694759418:cluster/itzeks-662003sh3b-z6q66xod to /Users/michaeldobson/.kube/config
➜  K8s kubectl get nodes
NAME                          STATUS   ROLES    AGE   VERSION
ip-10-0-13-168.ec2.internal   Ready    <none>   39m   v1.33.5-eks-ecaa3a6
ip-10-0-15-47.ec2.internal    Ready    <none>   39m   v1.33.5-eks-ecaa3a6
ip-10-0-22-122.ec2.internal   Ready    <none>   39m   v1.33.5-eks-ecaa3a6
ip-10-0-24-194.ec2.internal   Ready    <none>   39m   v1.33.5-eks-ecaa3a6
➜  K8s kubectl get namespaces
NAME              STATUS   AGE
default           Active   42m
kube-node-lease   Active   42m
kube-public       Active   42m
kube-system       Active   42m
➜  K8s

```

Referring to the docs: https://github.com/IBM/DataStage/tree/main/RemoteEngine/kubernetes#datastage-remote-engine-on-kubernetes

also Docker was here: https://github.com/IBM/DataStage/tree/main/RemoteEngine/docker


Setting up an input file:

```
# indicate that you have accepted license for IBM DataStage as a Service Anywhere(https://www.ibm.com/support/customer/csol/terms/?ref=i126-9243-06-11-2023-zz-en)
license_accept=true

# If you are specifically deploying a remote engine for IBM Cloud, the data center where your DataStage is provisioned on IBM cloud (dallas, frankfurt, sydney, toronto, london, or awsprod); the default is dallas.
data_center=dallas

# the namespace to deploy the remote engine
namespace=tutorial

# If you are specifically deploying a remote engine for IBM Cloud, the username and api key for the IBM Cloud Container Registry.
# If you are specifically deploying a remote engine for CP4D, the username and api key for the IBM Entitled Registry.
# The username and password for the registry can be omitted if the global pull secret has been configured for the IBM Entitled Registry.
username=iamapikey
password=***REMOVED***

# If you are deploying a remote engine for IBM Cloud, this value will be the IBM Cloud api key for the remote engine to use.
# If you are deploying a remote engine for CP4D, this value will be the CP4D Cluster account login api key of the target cluster for the remote engine to use. Go to "Profile and settings" when logged in to get your api key for the connection.
api_key=***REMOVED***

# If you are specifically deploying a remote engine for CP4D, the CP4D service id username of the target cluster for the remote engine to use with api key
# service_id=cpadmin

# the comma separated list of project IDs that will be using this remote engine
projectId=***REMOVED***

# the name of the remote engine (alphanumeric and without spaces)
name=aws-getting-started-k8s

#the size of the pxruntime - small, medium, or large (default is small)
size=small

# the file storage class to use
storage_class=efs-sc

# the storage size in gb
storage_size=20

# comma separated list of ids (IAM IDs for cloud, check https://cloud.ibm.com/docs/account?topic=account-identity-overview for details; uids/usernames for cp4d) that can also control remote engine besides the owner
# additional_users=<IBMid-1000000000,IBMid-2000000000,IBMid-3000000000...>

# If you are specifically deploying a remote engine for CP4D, the zen url of the target cluster to use for CP4D environment. Specifying this variable will automatically switch usage from IBM Cloud to CP4D.
# zen_url=<zen-url>

# Specify the proxy url (eg. http://<username>:<password>@<proxy_ip>:<port>).
# proxy_url=<proxy-url>

# Specify the absolute location of the custom CA store for the specified proxy - if it is using a self signed certificate.
# cacert_location=<cacert-location>

# Specify the location of the Kerberos config file if using Kerberos Authentication.
# KRB5_CONF_FILE=<krb5_conf_location>

# Specify the directory of multiple Kerberos config files if using Kerberos Authentication. (Only supported with --krb5-conf, the krb5.conf file needs to include 'includedir /etc/krb5-config-files/krb5-config-dir' line).
# KRB5_CONF_DIR=<krb5_config_dir_location>

# Specify the location of the DB2Z license to import
# DB2Z_LICENSE=<db2z_license_location>

# Specify your custom container registry to pull images from if you are image mirroring using a private registry. If using this option, you must set USE_DIGESTS as well for IBM Cloud.
# CUSTOM_DOCKER_REGISTRY=<docker-registry>

# Custom operator registry suffix to use for the remote engine to pull ds-operator images from if using a custom container registry. Defaults to 'cpopen'.
# OPERATOR_REGISTRY_SUFFIX=<operator-suffix>

# Custom docker registry suffix to use for the remote engine to pull ds-px-runtime and ds-px-compute images from if using a custom container registry. Defaults to 'cp/cpd'.
# DOCKER_REGISTRY_SUFFIX=<docker-suffix>

# Custom digests to use for the remote engine. This option must be set if using a custom registry for IBM Cloud.
# USE_DIGESTS=<ds-operator-digest>,<ds-px-runtime-digest>,<ds-px-compute-digest>

# Specify the account ID of the AWS governing owner account (required for awsprod).
# MCSP_ACCOUNT_ID=<mcsp-account-id>

# the DNS name or IP of the EFS file system; omit if not deploying on AWS's EKS
# the provisioner will use the storage class name specified in storage_class
# nfs_server=<dns-name-or-IP>

# the namespace to deploy the storage class provisioner; will deploy to the same
# namespace as the remote engine if omitted
# provisioner_namespace=<namespace>

```

```
kubernetes git:(main) ✗ pwd
/Users/michaeldobson/Documents/Product Management/Remote_Engine/TZ_AWS/K8s/DataStage/RemoteEngine/kubernetes
➜  kubernetes git:(main) ✗ lwd-l
zsh: command not found: lwd-l
➜  kubernetes git:(main) ✗ ls -l
total 144
-rwxr-xr-x@ 1 michaeldobson  staff  55691 Jan 21 13:20 launch.sh
-rw-r--r--@ 1 michaeldobson  staff  16148 Jan 21 13:13 README.md
➜  kubernetes git:(main) ✗ ./launch.sh -f ../../../getting-started/input_file.txt

IBM DataStage Remote Engine 1.0.13
/opt/homebrew/bin/kubectl
Setting Kubernetes cli to 'kubectl'
Error from server (NotFound): namespaces "tutorial" not found
ERROR: The namespace  does not exist. Please create it and run the command again.
➜  kubernetes git:(main) ✗ kubectl create namespace tutorial
namespace/tutorial created
➜  kubernetes git:(main) ✗ ./launch.sh -f ../../../getting-started/input_file.txt

IBM DataStage Remote Engine 1.0.13
/opt/homebrew/bin/kubectl
Setting Kubernetes cli to 'kubectl'
secret/datastage-pull-secret created
secret/datastage-api-key-secret created
/opt/homebrew/bin/jq
DOCKER_REGISTRY=icr.io
OPERATOR_REGISTRY=icr.io/datastage
DOCKER_REGISTRY_PREFIX=icr.io/datastage
Retrieving latest digest for ds-operator.
Retrieved digest for ds-operator: sha256:ad18875c665bccdd119d29151e681c1df9ce3ea097b18f1aabd1c9f3acaf578e
Retrieving latest digest for ds-px-runtime.
Retrieved digest for ds-px-runtime: sha256:b668e04c60d2c2efb5de20d30c20450127f631217d3863e2ea2575139ff322f1
Retrieving latest digest for ds-px-compute.
Retrieved digest for ds-px-compute: sha256:376bc6e58f90c920628b41228c3e7c592adcc4d17f1b5ce8c3e4133a2e26b7fc
Deploying DataStage operator to namespace tutorial...
serviceaccount/ibm-cpd-datastage-remote-operator-serviceaccount created
role.rbac.authorization.k8s.io/ibm-cpd-datastage-remote-operator-role created
rolebinding.rbac.authorization.k8s.io/ibm-cpd-datastage-remote-operator-role-binding created
customresourcedefinition.apiextensions.k8s.io/pxremoteengines.ds.cpd.ibm.com created
deployment.apps/ibm-cpd-datastage-remote-operator created
DataStage operator deployment created.
Error from server (NotFound): pxremoteengines.ds.cpd.ibm.com "aws-getting-started-k8s" not found
pxremoteengine.ds.cpd.ibm.com/aws-getting-started-k8s created
To check the status of the PXRemoteEngine instance, run the command below:
kubectl -n tutorial get pxre aws-getting-started-k8s
➜  kubernetes git:(main) ✗
```


Then, I go and check as things are starting up:

```
 kubernetes git:(main) ✗ kubectl get pods -n tutorial
NAME                                                              READY   STATUS              RESTARTS   AGE
aws-getting-started-k8s-ibm-datastage-px-runtime-66b6fdf6d6kn4n   0/1     ContainerCreating   0          3s
ibm-cpd-datastage-remote-operator-54555697b9-mpt5k                1/1     Running             0          33s
```

```
➜  kubernetes git:(main) ✗ watch -n 0.5 "kubectl get pods -n tutorial"
kubectl get pods -n tutorial
NAME                                                              READY   STATUS              RESTARTS   AGE
aws-getting-started-k8s-ibm-datastage-px-compute-0                0/1     ContainerCreating   0          110s
aws-getting-started-k8s-ibm-datastage-px-compute-1                0/1     ContainerCreating   0          110s
aws-getting-started-k8s-ibm-datastage-px-runtime-66b6fdf6d6kn4n   0/1     ContainerCreating   0          115s
ibm-cpd-datastage-remote-operator-54555697b9-mpt5k                1/1     Running             0          


Every 0.5s: kubectl get pods -n tutorial                                          dhcp-9-65-75-69.oma-us.ibm.com: 13:26:46

NAME                                                              READY   STATUS              RESTARTS   AGE
aws-getting-started-k8s-ibm-datastage-px-compute-0                0/1     Running             0          3m29s
aws-getting-started-k8s-ibm-datastage-px-compute-1                0/1     Running             0          3m29s
aws-getting-started-k8s-ibm-datastage-px-runtime-66b6fdf6d6kn4n   0/1     ContainerCreating   0          3m34s
ibm-cpd-datastage-remote-operator-54555697b9-mpt5k                1/1     Running             0          4m4s

Every 0.5s: kubectl get pods -n tutorial                                          dhcp-9-65-75-69.oma-us.ibm.com: 13:28:14

NAME                                                              READY   STATUS    RESTARTS   AGE
aws-getting-started-k8s-ibm-datastage-px-compute-0                1/1     Running   0          4m58s
aws-getting-started-k8s-ibm-datastage-px-compute-1                1/1     Running   0          4m58s
aws-getting-started-k8s-ibm-datastage-px-runtime-66b6fdf6d6kn4n   0/1     Running   0          5m3s
ibm-cpd-datastage-remote-operator-54555697b9-mpt5k                1/1     Running   0          5m33s

Every 0.5s: kubectl get pods -n tutorial                                          dhcp-9-65-75-69.oma-us.ibm.com: 13:29:21

NAME                                                              READY   STATUS    RESTARTS   AGE
aws-getting-started-k8s-ibm-datastage-px-compute-0                1/1     Running   0          6m5s
aws-getting-started-k8s-ibm-datastage-px-compute-1                1/1     Running   0          6m5s
aws-getting-started-k8s-ibm-datastage-px-runtime-66b6fdf6d6kn4n   1/1     Running   0          6m10s
ibm-cpd-datastage-remote-operator-54555697b9-mpt5k                1/1     Running   0          6m40s

```

if there are any issues during this process, the best bet is to describe the pod that is not creating or stuck and read the error meseages. warning messages can be ignored.

Once they are all done, the pxre deployment takes some time before it completes registration:

```
kubectl get pxre -n tutorial
NAME                      VERSION   RECONCILED   STATUS       AGE
aws-getting-started-k8s                          InProgress   7m29s
➜  kubernetes git:(main) ✗

Every 0.5s: kubectl get pxre -n tutorial                                          dhcp-9-65-75-69.oma-us.ibm.com: 13:30:50

NAME                      VERSION   RECONCILED   STATUS       AGE
aws-getting-started-k8s                          Failed   8m8s

NAME                      VERSION   RECONCILED   STATUS       AGE
aws-getting-started-k8s                          InProgress   8m23s

NAME                      VERSION   RECONCILED   STATUS      AGE
aws-getting-started-k8s             5.3.0        Completed   10m

```

Now go into the UI and confirm.
![alt text](image-2.png)

Woo!


---

That's it! Just copy/paste from your terminal when you're done.