# Cost Saving
### On Demand
 - Is the most expansive option
 - It Gives full control of instances lifecicle (launch, hibernate, stop)
 - You pay for seconds usage and Storage
 - Ideal for short-term workload that cannot be interrupted

### Saving Plans
 - AWS Cost management
 - Payment Options from less expensive to more expensive
    - All upfront
    - Partial Upfront
    - No Upfront

##### Compute savings plans
 - Commitment plan from 1 - 3 years regardless the instace family
 - Up to 66% of saving

##### EC2 Instance Savings Plans
 - Commitment plan from 1 - 3 years based on region and instance familly
 - Up to 72% of saving

### EC2 Reserved Instance
 - You buy a reserved instance that much to match certains attributes
    - Instance tpe, region, tenance, OS
  - 1 - 3 years of commitment

### Spot Instances
 - Uses spares EC2 capacity
 - Each AZ price is set by Amazon EC2 based on long-term support and demand for Spot Instances
 - Spot Instances runs whenever capacity is available and the maximum price exceeds the Spot Price
 - Ideally for data analysis, batch jobs, background processng, and optional tasks

### Dedicated Hosts
 - It's physical host
 - Fully dedicated capacity
 - Allow use of per-core, per-socket, per-VM software licenses
 - All deploy will be directed to the same phisycal host
 - Control over the instances running on the server
 - per-instance Billing

### Dedicated Instances
 - Dedicated Hardware to a single customer
 - Deploys might direct to other physhical host
 - May share hardware with other instances from the same AWS account that are not dedicated instances
 - Physical isoleted from another AWS accounts
 - per-instance Billing

### Capacity Reservation
 - A capacity reservtion allows you to launch a EC2 instance that matches (tenancy, OS, instance type, and region) imediatily
 - The billing will start as soon as the capacity is enabled
 - The capacity can be removed any time.

## VPC
 - A range of IPs
 - For each AWS account there is a VPC default

## Security Groups
 - Stateful firewall. This means once it has a rule to incoming trafic, the outgoing trafic will be enbled as well since it stores the state of connections.

## Network Access Controll List
 - Optional
 - Stateless firewall. This means NACL needs to describe incoming and outgoing trafic.

## Subnet
 - A subrange of VPC that risides into a Avalability Zone
 - A Subnet with traffic routed to an internet gateway is a public subnet.

## Elastic IPs
 - Is a way to mask a failure in a instance remapping the ip address to another instance

## Elastic Network Interaface
 - Logical network component in a VPC that represents a vitual network card
 - It's a way to have one EC2 instance in more than one network through ENI
