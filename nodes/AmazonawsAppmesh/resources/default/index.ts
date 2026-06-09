import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Create Gateway Route",
					"value": "Create Gateway Route",
					"action": "Create Gateway Route",
					"description": "<p>Creates a gateway route.</p> <p>A gateway route is attached to a virtual gateway and routes traffic to an existing virtual service. If a route matches a request, it can distribute traffic to a target virtual service.</p> <p>For more information about gateway routes, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/gateway-routes.html\">Gateway routes</a>.</p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualGateway/{{$parameter[\"virtualGatewayName\"]}}/gatewayRoutes"
						}
					}
				},
				{
					"name": "List Gateway Routes",
					"value": "List Gateway Routes",
					"action": "List Gateway Routes",
					"description": "Returns a list of existing gateway routes that are associated to a virtual gateway.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualGateway/{{$parameter[\"virtualGatewayName\"]}}/gatewayRoutes"
						}
					}
				},
				{
					"name": "Create Mesh",
					"value": "Create Mesh",
					"action": "Create Mesh",
					"description": "<p>Creates a service mesh.</p> <p> A service mesh is a logical boundary for network traffic between services that are represented by resources within the mesh. After you create your service mesh, you can create virtual services, virtual nodes, virtual routers, and routes to distribute traffic between the applications in your mesh.</p> <p>For more information about service meshes, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html\">Service meshes</a>.</p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v20190125/meshes"
						}
					}
				},
				{
					"name": "List Meshes",
					"value": "List Meshes",
					"action": "List Meshes",
					"description": "Returns a list of existing service meshes.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v20190125/meshes"
						}
					}
				},
				{
					"name": "Create Route",
					"value": "Create Route",
					"action": "Create Route",
					"description": "<p>Creates a route that is associated with a virtual router.</p> <p> You can route several different protocols and define a retry policy for a route. Traffic can be routed to one or more virtual nodes.</p> <p>For more information about routes, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html\">Routes</a>.</p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualRouter/{{$parameter[\"virtualRouterName\"]}}/routes"
						}
					}
				},
				{
					"name": "List Routes",
					"value": "List Routes",
					"action": "List Routes",
					"description": "Returns a list of existing routes in a service mesh.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualRouter/{{$parameter[\"virtualRouterName\"]}}/routes"
						}
					}
				},
				{
					"name": "Create Virtual Gateway",
					"value": "Create Virtual Gateway",
					"action": "Create Virtual Gateway",
					"description": "<p>Creates a virtual gateway.</p> <p>A virtual gateway allows resources outside your mesh to communicate to resources that are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a virtual node, which represents an Envoy running with an application, a virtual gateway represents Envoy deployed by itself.</p> <p>For more information about virtual gateways, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html\">Virtual gateways</a>. </p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualGateways"
						}
					}
				},
				{
					"name": "List Virtual Gateways",
					"value": "List Virtual Gateways",
					"action": "List Virtual Gateways",
					"description": "Returns a list of existing virtual gateways in a service mesh.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualGateways"
						}
					}
				},
				{
					"name": "Create Virtual Node",
					"value": "Create Virtual Node",
					"action": "Create Virtual Node",
					"description": "<p>Creates a virtual node within a service mesh.</p> <p> A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can specify the service discovery information for your task group, and whether the proxy running in a task group will communicate with other proxies using Transport Layer Security (TLS).</p> <p>You define a <code>listener</code> for any inbound traffic that your virtual node expects. Any virtual service that your virtual node expects to communicate to is specified as a <code>backend</code>.</p> <p>The response metadata for your new virtual node contains the <code>arn</code> that is associated with the virtual node. Set this value to the full ARN; for example, <code>arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp</code>) as the <code>APPMESH_RESOURCE_ARN</code> environment variable for your task group's Envoy proxy container in your task definition or pod spec. This is then mapped to the <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p> <note> <p>By default, App Mesh uses the name of the resource you specified in <code>APPMESH_RESOURCE_ARN</code> when Envoy is referring to itself in metrics and traces. You can override this behavior by setting the <code>APPMESH_RESOURCE_CLUSTER</code> environment variable with your own name.</p> </note> <p>For more information about virtual nodes, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html\">Virtual nodes</a>. You must be using <code>1.15.0</code> or later of the Envoy image when setting these variables. For more information aboutApp Mesh Envoy variables, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html\">Envoy image</a> in the App Mesh User Guide.</p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualNodes"
						}
					}
				},
				{
					"name": "List Virtual Nodes",
					"value": "List Virtual Nodes",
					"action": "List Virtual Nodes",
					"description": "Returns a list of existing virtual nodes.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualNodes"
						}
					}
				},
				{
					"name": "Create Virtual Router",
					"value": "Create Virtual Router",
					"action": "Create Virtual Router",
					"description": "<p>Creates a virtual router within a service mesh.</p> <p>Specify a <code>listener</code> for any inbound traffic that your virtual router receives. Create a virtual router for each protocol and port that you need to route. Virtual routers handle traffic for one or more virtual services within your mesh. After you create your virtual router, create and associate routes for your virtual router that direct incoming requests to different virtual nodes.</p> <p>For more information about virtual routers, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html\">Virtual routers</a>.</p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualRouters"
						}
					}
				},
				{
					"name": "List Virtual Routers",
					"value": "List Virtual Routers",
					"action": "List Virtual Routers",
					"description": "Returns a list of existing virtual routers in a service mesh.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualRouters"
						}
					}
				},
				{
					"name": "Create Virtual Service",
					"value": "Create Virtual Service",
					"action": "Create Virtual Service",
					"description": "<p>Creates a virtual service within a service mesh.</p> <p>A virtual service is an abstraction of a real service that is provided by a virtual node directly or indirectly by means of a virtual router. Dependent services call your virtual service by its <code>virtualServiceName</code>, and those requests are routed to the virtual node or virtual router that is specified as the provider for the virtual service.</p> <p>For more information about virtual services, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html\">Virtual services</a>.</p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualServices"
						}
					}
				},
				{
					"name": "List Virtual Services",
					"value": "List Virtual Services",
					"action": "List Virtual Services",
					"description": "Returns a list of existing virtual services in a service mesh.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualServices"
						}
					}
				},
				{
					"name": "Delete Gateway Route",
					"value": "Delete Gateway Route",
					"action": "Delete Gateway Route",
					"description": "Deletes an existing gateway route.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualGateway/{{$parameter[\"virtualGatewayName\"]}}/gatewayRoutes/{{$parameter[\"gatewayRouteName\"]}}"
						}
					}
				},
				{
					"name": "Describe Gateway Route",
					"value": "Describe Gateway Route",
					"action": "Describe Gateway Route",
					"description": "Describes an existing gateway route.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualGateway/{{$parameter[\"virtualGatewayName\"]}}/gatewayRoutes/{{$parameter[\"gatewayRouteName\"]}}"
						}
					}
				},
				{
					"name": "Update Gateway Route",
					"value": "Update Gateway Route",
					"action": "Update Gateway Route",
					"description": "Updates an existing gateway route that is associated to a specified virtual gateway in a service mesh.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualGateway/{{$parameter[\"virtualGatewayName\"]}}/gatewayRoutes/{{$parameter[\"gatewayRouteName\"]}}"
						}
					}
				},
				{
					"name": "Delete Mesh",
					"value": "Delete Mesh",
					"action": "Delete Mesh",
					"description": "<p>Deletes an existing service mesh.</p> <p>You must delete all resources (virtual services, routes, virtual routers, and virtual nodes) in the service mesh before you can delete the mesh itself.</p>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}"
						}
					}
				},
				{
					"name": "Describe Mesh",
					"value": "Describe Mesh",
					"action": "Describe Mesh",
					"description": "Describes an existing service mesh.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}"
						}
					}
				},
				{
					"name": "Update Mesh",
					"value": "Update Mesh",
					"action": "Update Mesh",
					"description": "Updates an existing service mesh.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}"
						}
					}
				},
				{
					"name": "Delete Route",
					"value": "Delete Route",
					"action": "Delete Route",
					"description": "Deletes an existing route.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualRouter/{{$parameter[\"virtualRouterName\"]}}/routes/{{$parameter[\"routeName\"]}}"
						}
					}
				},
				{
					"name": "Describe Route",
					"value": "Describe Route",
					"action": "Describe Route",
					"description": "Describes an existing route.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualRouter/{{$parameter[\"virtualRouterName\"]}}/routes/{{$parameter[\"routeName\"]}}"
						}
					}
				},
				{
					"name": "Update Route",
					"value": "Update Route",
					"action": "Update Route",
					"description": "Updates an existing route for a specified service mesh and virtual router.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualRouter/{{$parameter[\"virtualRouterName\"]}}/routes/{{$parameter[\"routeName\"]}}"
						}
					}
				},
				{
					"name": "Delete Virtual Gateway",
					"value": "Delete Virtual Gateway",
					"action": "Delete Virtual Gateway",
					"description": "Deletes an existing virtual gateway. You cannot delete a virtual gateway if any gateway routes are associated to it.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualGateways/{{$parameter[\"virtualGatewayName\"]}}"
						}
					}
				},
				{
					"name": "Describe Virtual Gateway",
					"value": "Describe Virtual Gateway",
					"action": "Describe Virtual Gateway",
					"description": "Describes an existing virtual gateway.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualGateways/{{$parameter[\"virtualGatewayName\"]}}"
						}
					}
				},
				{
					"name": "Update Virtual Gateway",
					"value": "Update Virtual Gateway",
					"action": "Update Virtual Gateway",
					"description": "Updates an existing virtual gateway in a specified service mesh.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualGateways/{{$parameter[\"virtualGatewayName\"]}}"
						}
					}
				},
				{
					"name": "Delete Virtual Node",
					"value": "Delete Virtual Node",
					"action": "Delete Virtual Node",
					"description": "<p>Deletes an existing virtual node.</p> <p>You must delete any virtual services that list a virtual node as a service provider before you can delete the virtual node itself.</p>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualNodes/{{$parameter[\"virtualNodeName\"]}}"
						}
					}
				},
				{
					"name": "Describe Virtual Node",
					"value": "Describe Virtual Node",
					"action": "Describe Virtual Node",
					"description": "Describes an existing virtual node.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualNodes/{{$parameter[\"virtualNodeName\"]}}"
						}
					}
				},
				{
					"name": "Update Virtual Node",
					"value": "Update Virtual Node",
					"action": "Update Virtual Node",
					"description": "Updates an existing virtual node in a specified service mesh.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualNodes/{{$parameter[\"virtualNodeName\"]}}"
						}
					}
				},
				{
					"name": "Delete Virtual Router",
					"value": "Delete Virtual Router",
					"action": "Delete Virtual Router",
					"description": "<p>Deletes an existing virtual router.</p> <p>You must delete any routes associated with the virtual router before you can delete the router itself.</p>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualRouters/{{$parameter[\"virtualRouterName\"]}}"
						}
					}
				},
				{
					"name": "Describe Virtual Router",
					"value": "Describe Virtual Router",
					"action": "Describe Virtual Router",
					"description": "Describes an existing virtual router.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualRouters/{{$parameter[\"virtualRouterName\"]}}"
						}
					}
				},
				{
					"name": "Update Virtual Router",
					"value": "Update Virtual Router",
					"action": "Update Virtual Router",
					"description": "Updates an existing virtual router in a specified service mesh.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualRouters/{{$parameter[\"virtualRouterName\"]}}"
						}
					}
				},
				{
					"name": "Delete Virtual Service",
					"value": "Delete Virtual Service",
					"action": "Delete Virtual Service",
					"description": "Deletes an existing virtual service.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualServices/{{$parameter[\"virtualServiceName\"]}}"
						}
					}
				},
				{
					"name": "Describe Virtual Service",
					"value": "Describe Virtual Service",
					"action": "Describe Virtual Service",
					"description": "Describes an existing virtual service.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualServices/{{$parameter[\"virtualServiceName\"]}}"
						}
					}
				},
				{
					"name": "Update Virtual Service",
					"value": "Update Virtual Service",
					"action": "Update Virtual Service",
					"description": "Updates an existing virtual service in a specified service mesh.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v20190125/meshes/{{$parameter[\"meshName\"]}}/virtualServices/{{$parameter[\"virtualServiceName\"]}}"
						}
					}
				},
				{
					"name": "List Tags For Resource",
					"value": "List Tags For Resource",
					"action": "List Tags For Resource",
					"description": "List the tags for an App Mesh resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v20190125/tags#resourceArn"
						}
					}
				},
				{
					"name": "Tag Resource",
					"value": "Tag Resource",
					"action": "Tag Resource",
					"description": "Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v20190125/tag#resourceArn"
						}
					}
				},
				{
					"name": "Untag Resource",
					"value": "Untag Resource",
					"action": "Untag Resource",
					"description": "Deletes specified tags from a resource.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v20190125/untag#resourceArn"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PUT /v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh to create the gateway route in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "Virtual Gateway Name",
			"name": "virtualGatewayName",
			"required": true,
			"description": "The name of the virtual gateway to associate the gateway route with. If the virtual gateway is in a shared mesh, then you must be the owner of the virtual gateway resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "Client Token",
			"name": "clientToken",
			"type": "string",
			"default": "",
			"description": "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.",
			"routing": {
				"send": {
					"property": "clientToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Gateway Route"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Gateway Route Name",
			"name": "gatewayRouteName",
			"type": "string",
			"default": "",
			"description": "The name to use for the gateway route.",
			"routing": {
				"send": {
					"property": "gatewayRouteName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Gateway Route"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Spec",
			"name": "spec",
			"type": "json",
			"default": "{\n  \"grpcRoute\": {\n    \"action\": {},\n    \"match\": {}\n  },\n  \"http2Route\": {},\n  \"httpRoute\": {},\n  \"priority\": {}\n}",
			"description": "An object that represents a gateway route specification. Specify one gateway route type.",
			"routing": {
				"send": {
					"property": "spec",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {\n    \"value\": {}\n  }\n]",
			"description": "Optional metadata that you can apply to the gateway route to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "GET /v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Gateway Routes"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The maximum number of results returned by <code>ListGatewayRoutes</code> in paginated output. When you use this parameter, <code>ListGatewayRoutes</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListGatewayRoutes</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListGatewayRoutes</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Gateway Routes"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh to list gateway routes in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Gateway Routes"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Gateway Routes"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "The <code>nextToken</code> value returned from a previous paginated <code>ListGatewayRoutes</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Gateway Routes"
					]
				}
			}
		},
		{
			"displayName": "Virtual Gateway Name",
			"name": "virtualGatewayName",
			"required": true,
			"description": "The name of the virtual gateway to list gateway routes in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Gateway Routes"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Gateway Routes"
					]
				}
			}
		},
		{
			"displayName": "PUT /v20190125/meshes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Mesh"
					]
				}
			}
		},
		{
			"displayName": "Client Token",
			"name": "clientToken",
			"type": "string",
			"default": "",
			"description": "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.",
			"routing": {
				"send": {
					"property": "clientToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Mesh"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Mesh Name",
			"name": "meshName",
			"type": "string",
			"default": "",
			"description": "The name to use for the service mesh.",
			"routing": {
				"send": {
					"property": "meshName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Mesh"
					]
				}
			}
		},
		{
			"displayName": "Spec",
			"name": "spec",
			"type": "json",
			"default": "{\n  \"egressFilter\": {\n    \"type\": {}\n  },\n  \"serviceDiscovery\": {\n    \"ipPreference\": {}\n  }\n}",
			"description": "An object that represents the specification of a service mesh.",
			"routing": {
				"send": {
					"property": "spec",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Mesh"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {\n    \"value\": {}\n  }\n]",
			"description": "Optional metadata that you can apply to the service mesh to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Mesh"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Mesh"
					]
				}
			}
		},
		{
			"displayName": "GET /v20190125/meshes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Meshes"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The maximum number of results returned by <code>ListMeshes</code> in paginated output. When you use this parameter, <code>ListMeshes</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListMeshes</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListMeshes</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Meshes"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "<p>The <code>nextToken</code> value returned from a previous paginated <code>ListMeshes</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</p> </note>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Meshes"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Meshes"
					]
				}
			}
		},
		{
			"displayName": "PUT /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Route"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh to create the route in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Route"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Route"
					]
				}
			}
		},
		{
			"displayName": "Virtual Router Name",
			"name": "virtualRouterName",
			"required": true,
			"description": "The name of the virtual router in which to create the route. If the virtual router is in a shared mesh, then you must be the owner of the virtual router resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Route"
					]
				}
			}
		},
		{
			"displayName": "Client Token",
			"name": "clientToken",
			"type": "string",
			"default": "",
			"description": "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.",
			"routing": {
				"send": {
					"property": "clientToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Route"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Route Name",
			"name": "routeName",
			"type": "string",
			"default": "",
			"description": "The name to use for the route.",
			"routing": {
				"send": {
					"property": "routeName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Route"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Spec",
			"name": "spec",
			"type": "json",
			"default": "{\n  \"grpcRoute\": {\n    \"action\": {},\n    \"match\": {},\n    \"retryPolicy\": {},\n    \"timeout\": {}\n  },\n  \"http2Route\": {},\n  \"httpRoute\": {},\n  \"priority\": {},\n  \"tcpRoute\": {}\n}",
			"description": "An object that represents a route specification. Specify one route type.",
			"routing": {
				"send": {
					"property": "spec",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Route"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {\n    \"value\": {}\n  }\n]",
			"description": "Optional metadata that you can apply to the route to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Route"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Route"
					]
				}
			}
		},
		{
			"displayName": "GET /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Routes"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The maximum number of results returned by <code>ListRoutes</code> in paginated output. When you use this parameter, <code>ListRoutes</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListRoutes</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListRoutes</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Routes"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh to list routes in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Routes"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Routes"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "The <code>nextToken</code> value returned from a previous paginated <code>ListRoutes</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Routes"
					]
				}
			}
		},
		{
			"displayName": "Virtual Router Name",
			"name": "virtualRouterName",
			"required": true,
			"description": "The name of the virtual router to list routes in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Routes"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Routes"
					]
				}
			}
		},
		{
			"displayName": "PUT /v20190125/meshes/{meshName}/virtualGateways",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Gateway"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh to create the virtual gateway in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Gateway"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Gateway"
					]
				}
			}
		},
		{
			"displayName": "Client Token",
			"name": "clientToken",
			"type": "string",
			"default": "",
			"description": "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.",
			"routing": {
				"send": {
					"property": "clientToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Gateway"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Spec",
			"name": "spec",
			"type": "json",
			"default": "{\n  \"backendDefaults\": {\n    \"clientPolicy\": {}\n  },\n  \"listeners\": {},\n  \"logging\": {\n    \"accessLog\": {}\n  }\n}",
			"description": "An object that represents the specification of a service mesh resource.",
			"routing": {
				"send": {
					"property": "spec",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Gateway"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {\n    \"value\": {}\n  }\n]",
			"description": "Optional metadata that you can apply to the virtual gateway to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Gateway"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Virtual Gateway Name",
			"name": "virtualGatewayName",
			"type": "string",
			"default": "",
			"description": "The name to use for the virtual gateway.",
			"routing": {
				"send": {
					"property": "virtualGatewayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Gateway"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Gateway"
					]
				}
			}
		},
		{
			"displayName": "GET /v20190125/meshes/{meshName}/virtualGateways",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Virtual Gateways"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The maximum number of results returned by <code>ListVirtualGateways</code> in paginated output. When you use this parameter, <code>ListVirtualGateways</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListVirtualGateways</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListVirtualGateways</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Virtual Gateways"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh to list virtual gateways in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Virtual Gateways"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Virtual Gateways"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "The <code>nextToken</code> value returned from a previous paginated <code>ListVirtualGateways</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Virtual Gateways"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Virtual Gateways"
					]
				}
			}
		},
		{
			"displayName": "PUT /v20190125/meshes/{meshName}/virtualNodes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Node"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh to create the virtual node in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Node"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Node"
					]
				}
			}
		},
		{
			"displayName": "Client Token",
			"name": "clientToken",
			"type": "string",
			"default": "",
			"description": "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.",
			"routing": {
				"send": {
					"property": "clientToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Node"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Spec",
			"name": "spec",
			"type": "json",
			"default": "{\n  \"backendDefaults\": {\n    \"clientPolicy\": {}\n  },\n  \"backends\": {},\n  \"listeners\": {},\n  \"logging\": {},\n  \"serviceDiscovery\": {}\n}",
			"description": "An object that represents the specification of a virtual node.",
			"routing": {
				"send": {
					"property": "spec",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Node"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {\n    \"value\": {}\n  }\n]",
			"description": "Optional metadata that you can apply to the virtual node to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Node"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Virtual Node Name",
			"name": "virtualNodeName",
			"type": "string",
			"default": "",
			"description": "The name to use for the virtual node.",
			"routing": {
				"send": {
					"property": "virtualNodeName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Node"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Node"
					]
				}
			}
		},
		{
			"displayName": "GET /v20190125/meshes/{meshName}/virtualNodes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Virtual Nodes"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The maximum number of results returned by <code>ListVirtualNodes</code> in paginated output. When you use this parameter, <code>ListVirtualNodes</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListVirtualNodes</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListVirtualNodes</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Virtual Nodes"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh to list virtual nodes in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Virtual Nodes"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Virtual Nodes"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "The <code>nextToken</code> value returned from a previous paginated <code>ListVirtualNodes</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Virtual Nodes"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Virtual Nodes"
					]
				}
			}
		},
		{
			"displayName": "PUT /v20190125/meshes/{meshName}/virtualRouters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Router"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh to create the virtual router in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Router"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Router"
					]
				}
			}
		},
		{
			"displayName": "Client Token",
			"name": "clientToken",
			"type": "string",
			"default": "",
			"description": "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.",
			"routing": {
				"send": {
					"property": "clientToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Router"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Spec",
			"name": "spec",
			"type": "json",
			"default": "{\n  \"listeners\": [\n    {\n      \"portMapping\": {\n        \"port\": {},\n        \"protocol\": {}\n      }\n    }\n  ]\n}",
			"description": "An object that represents the specification of a virtual router.",
			"routing": {
				"send": {
					"property": "spec",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Router"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {\n    \"value\": {}\n  }\n]",
			"description": "Optional metadata that you can apply to the virtual router to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Router"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Virtual Router Name",
			"name": "virtualRouterName",
			"type": "string",
			"default": "",
			"description": "The name to use for the virtual router.",
			"routing": {
				"send": {
					"property": "virtualRouterName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Router"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Router"
					]
				}
			}
		},
		{
			"displayName": "GET /v20190125/meshes/{meshName}/virtualRouters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Virtual Routers"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The maximum number of results returned by <code>ListVirtualRouters</code> in paginated output. When you use this parameter, <code>ListVirtualRouters</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListVirtualRouters</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListVirtualRouters</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Virtual Routers"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh to list virtual routers in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Virtual Routers"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Virtual Routers"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "The <code>nextToken</code> value returned from a previous paginated <code>ListVirtualRouters</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Virtual Routers"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Virtual Routers"
					]
				}
			}
		},
		{
			"displayName": "PUT /v20190125/meshes/{meshName}/virtualServices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Service"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh to create the virtual service in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Service"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Service"
					]
				}
			}
		},
		{
			"displayName": "Client Token",
			"name": "clientToken",
			"type": "string",
			"default": "",
			"description": "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.",
			"routing": {
				"send": {
					"property": "clientToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Service"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Spec",
			"name": "spec",
			"type": "json",
			"default": "{\n  \"provider\": {\n    \"virtualNode\": {},\n    \"virtualRouter\": {}\n  }\n}",
			"description": "An object that represents the specification of a virtual service.",
			"routing": {
				"send": {
					"property": "spec",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Service"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {\n    \"value\": {}\n  }\n]",
			"description": "Optional metadata that you can apply to the virtual service to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Service"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Virtual Service Name",
			"name": "virtualServiceName",
			"type": "string",
			"default": "",
			"description": "The name to use for the virtual service.",
			"routing": {
				"send": {
					"property": "virtualServiceName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Service"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Virtual Service"
					]
				}
			}
		},
		{
			"displayName": "GET /v20190125/meshes/{meshName}/virtualServices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Virtual Services"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The maximum number of results returned by <code>ListVirtualServices</code> in paginated output. When you use this parameter, <code>ListVirtualServices</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListVirtualServices</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListVirtualServices</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Virtual Services"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh to list virtual services in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Virtual Services"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Virtual Services"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "The <code>nextToken</code> value returned from a previous paginated <code>ListVirtualServices</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Virtual Services"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Virtual Services"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "Gateway Route Name",
			"name": "gatewayRouteName",
			"required": true,
			"description": "The name of the gateway route to delete.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh to delete the gateway route from.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "Virtual Gateway Name",
			"name": "virtualGatewayName",
			"required": true,
			"description": "The name of the virtual gateway to delete the route from.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "GET /v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "Gateway Route Name",
			"name": "gatewayRouteName",
			"required": true,
			"description": "The name of the gateway route to describe.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh that the gateway route resides in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "Virtual Gateway Name",
			"name": "virtualGatewayName",
			"required": true,
			"description": "The name of the virtual gateway that the gateway route is associated with.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "PUT /v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "Gateway Route Name",
			"name": "gatewayRouteName",
			"required": true,
			"description": "The name of the gateway route to update.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh that the gateway route resides in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "Virtual Gateway Name",
			"name": "virtualGatewayName",
			"required": true,
			"description": "The name of the virtual gateway that the gateway route is associated with.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "Client Token",
			"name": "clientToken",
			"type": "string",
			"default": "",
			"description": "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.",
			"routing": {
				"send": {
					"property": "clientToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Gateway Route"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Spec",
			"name": "spec",
			"type": "json",
			"default": "{\n  \"grpcRoute\": {\n    \"action\": {},\n    \"match\": {}\n  },\n  \"http2Route\": {},\n  \"httpRoute\": {},\n  \"priority\": {}\n}",
			"description": "An object that represents a gateway route specification. Specify one gateway route type.",
			"routing": {
				"send": {
					"property": "spec",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Gateway Route"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v20190125/meshes/{meshName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Mesh"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh to delete.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Mesh"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Mesh"
					]
				}
			}
		},
		{
			"displayName": "GET /v20190125/meshes/{meshName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Mesh"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh to describe.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Mesh"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Mesh"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Mesh"
					]
				}
			}
		},
		{
			"displayName": "PUT /v20190125/meshes/{meshName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Mesh"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh to update.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Mesh"
					]
				}
			}
		},
		{
			"displayName": "Client Token",
			"name": "clientToken",
			"type": "string",
			"default": "",
			"description": "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.",
			"routing": {
				"send": {
					"property": "clientToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Mesh"
					]
				}
			}
		},
		{
			"displayName": "Spec",
			"name": "spec",
			"type": "json",
			"default": "{\n  \"egressFilter\": {\n    \"type\": {}\n  },\n  \"serviceDiscovery\": {\n    \"ipPreference\": {}\n  }\n}",
			"description": "An object that represents the specification of a service mesh.",
			"routing": {
				"send": {
					"property": "spec",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Mesh"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Mesh"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Route"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh to delete the route in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Route"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Route"
					]
				}
			}
		},
		{
			"displayName": "Route Name",
			"name": "routeName",
			"required": true,
			"description": "The name of the route to delete.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Route"
					]
				}
			}
		},
		{
			"displayName": "Virtual Router Name",
			"name": "virtualRouterName",
			"required": true,
			"description": "The name of the virtual router to delete the route in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Route"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Route"
					]
				}
			}
		},
		{
			"displayName": "GET /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Route"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh that the route resides in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Route"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Route"
					]
				}
			}
		},
		{
			"displayName": "Route Name",
			"name": "routeName",
			"required": true,
			"description": "The name of the route to describe.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Route"
					]
				}
			}
		},
		{
			"displayName": "Virtual Router Name",
			"name": "virtualRouterName",
			"required": true,
			"description": "The name of the virtual router that the route is associated with.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Route"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Route"
					]
				}
			}
		},
		{
			"displayName": "PUT /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Route"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh that the route resides in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Route"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Route"
					]
				}
			}
		},
		{
			"displayName": "Route Name",
			"name": "routeName",
			"required": true,
			"description": "The name of the route to update.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Route"
					]
				}
			}
		},
		{
			"displayName": "Virtual Router Name",
			"name": "virtualRouterName",
			"required": true,
			"description": "The name of the virtual router that the route is associated with.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Route"
					]
				}
			}
		},
		{
			"displayName": "Client Token",
			"name": "clientToken",
			"type": "string",
			"default": "",
			"description": "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.",
			"routing": {
				"send": {
					"property": "clientToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Route"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Spec",
			"name": "spec",
			"type": "json",
			"default": "{\n  \"grpcRoute\": {\n    \"action\": {},\n    \"match\": {},\n    \"retryPolicy\": {},\n    \"timeout\": {}\n  },\n  \"http2Route\": {},\n  \"httpRoute\": {},\n  \"priority\": {},\n  \"tcpRoute\": {}\n}",
			"description": "An object that represents a route specification. Specify one route type.",
			"routing": {
				"send": {
					"property": "spec",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Route"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Route"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Virtual Gateway"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh to delete the virtual gateway from.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Virtual Gateway"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Virtual Gateway"
					]
				}
			}
		},
		{
			"displayName": "Virtual Gateway Name",
			"name": "virtualGatewayName",
			"required": true,
			"description": "The name of the virtual gateway to delete.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Virtual Gateway"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Virtual Gateway"
					]
				}
			}
		},
		{
			"displayName": "GET /v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Virtual Gateway"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh that the gateway route resides in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Virtual Gateway"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Virtual Gateway"
					]
				}
			}
		},
		{
			"displayName": "Virtual Gateway Name",
			"name": "virtualGatewayName",
			"required": true,
			"description": "The name of the virtual gateway to describe.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Virtual Gateway"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Virtual Gateway"
					]
				}
			}
		},
		{
			"displayName": "PUT /v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Gateway"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh that the virtual gateway resides in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Gateway"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Gateway"
					]
				}
			}
		},
		{
			"displayName": "Virtual Gateway Name",
			"name": "virtualGatewayName",
			"required": true,
			"description": "The name of the virtual gateway to update.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Gateway"
					]
				}
			}
		},
		{
			"displayName": "Client Token",
			"name": "clientToken",
			"type": "string",
			"default": "",
			"description": "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.",
			"routing": {
				"send": {
					"property": "clientToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Gateway"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Spec",
			"name": "spec",
			"type": "json",
			"default": "{\n  \"backendDefaults\": {\n    \"clientPolicy\": {}\n  },\n  \"listeners\": {},\n  \"logging\": {\n    \"accessLog\": {}\n  }\n}",
			"description": "An object that represents the specification of a service mesh resource.",
			"routing": {
				"send": {
					"property": "spec",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Gateway"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Gateway"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Virtual Node"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh to delete the virtual node in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Virtual Node"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Virtual Node"
					]
				}
			}
		},
		{
			"displayName": "Virtual Node Name",
			"name": "virtualNodeName",
			"required": true,
			"description": "The name of the virtual node to delete.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Virtual Node"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Virtual Node"
					]
				}
			}
		},
		{
			"displayName": "GET /v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Virtual Node"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh that the virtual node resides in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Virtual Node"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Virtual Node"
					]
				}
			}
		},
		{
			"displayName": "Virtual Node Name",
			"name": "virtualNodeName",
			"required": true,
			"description": "The name of the virtual node to describe.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Virtual Node"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Virtual Node"
					]
				}
			}
		},
		{
			"displayName": "PUT /v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Node"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh that the virtual node resides in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Node"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Node"
					]
				}
			}
		},
		{
			"displayName": "Virtual Node Name",
			"name": "virtualNodeName",
			"required": true,
			"description": "The name of the virtual node to update.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Node"
					]
				}
			}
		},
		{
			"displayName": "Client Token",
			"name": "clientToken",
			"type": "string",
			"default": "",
			"description": "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.",
			"routing": {
				"send": {
					"property": "clientToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Node"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Spec",
			"name": "spec",
			"type": "json",
			"default": "{\n  \"backendDefaults\": {\n    \"clientPolicy\": {}\n  },\n  \"backends\": {},\n  \"listeners\": {},\n  \"logging\": {},\n  \"serviceDiscovery\": {}\n}",
			"description": "An object that represents the specification of a virtual node.",
			"routing": {
				"send": {
					"property": "spec",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Node"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Node"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Virtual Router"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh to delete the virtual router in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Virtual Router"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Virtual Router"
					]
				}
			}
		},
		{
			"displayName": "Virtual Router Name",
			"name": "virtualRouterName",
			"required": true,
			"description": "The name of the virtual router to delete.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Virtual Router"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Virtual Router"
					]
				}
			}
		},
		{
			"displayName": "GET /v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Virtual Router"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh that the virtual router resides in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Virtual Router"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Virtual Router"
					]
				}
			}
		},
		{
			"displayName": "Virtual Router Name",
			"name": "virtualRouterName",
			"required": true,
			"description": "The name of the virtual router to describe.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Virtual Router"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Virtual Router"
					]
				}
			}
		},
		{
			"displayName": "PUT /v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Router"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh that the virtual router resides in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Router"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Router"
					]
				}
			}
		},
		{
			"displayName": "Virtual Router Name",
			"name": "virtualRouterName",
			"required": true,
			"description": "The name of the virtual router to update.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Router"
					]
				}
			}
		},
		{
			"displayName": "Client Token",
			"name": "clientToken",
			"type": "string",
			"default": "",
			"description": "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.",
			"routing": {
				"send": {
					"property": "clientToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Router"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Spec",
			"name": "spec",
			"type": "json",
			"default": "{\n  \"listeners\": [\n    {\n      \"portMapping\": {\n        \"port\": {},\n        \"protocol\": {}\n      }\n    }\n  ]\n}",
			"description": "An object that represents the specification of a virtual router.",
			"routing": {
				"send": {
					"property": "spec",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Router"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Router"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Virtual Service"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh to delete the virtual service in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Virtual Service"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Virtual Service"
					]
				}
			}
		},
		{
			"displayName": "Virtual Service Name",
			"name": "virtualServiceName",
			"required": true,
			"description": "The name of the virtual service to delete.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Virtual Service"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Virtual Service"
					]
				}
			}
		},
		{
			"displayName": "GET /v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Virtual Service"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh that the virtual service resides in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Virtual Service"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Virtual Service"
					]
				}
			}
		},
		{
			"displayName": "Virtual Service Name",
			"name": "virtualServiceName",
			"required": true,
			"description": "The name of the virtual service to describe.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Virtual Service"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Virtual Service"
					]
				}
			}
		},
		{
			"displayName": "PUT /v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Service"
					]
				}
			}
		},
		{
			"displayName": "Mesh Name",
			"name": "meshName",
			"required": true,
			"description": "The name of the service mesh that the virtual service resides in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Service"
					]
				}
			}
		},
		{
			"displayName": "Mesh Owner",
			"name": "meshOwner",
			"description": "The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href=\"https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html\">Working with shared meshes</a>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "meshOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Service"
					]
				}
			}
		},
		{
			"displayName": "Virtual Service Name",
			"name": "virtualServiceName",
			"required": true,
			"description": "The name of the virtual service to update.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Service"
					]
				}
			}
		},
		{
			"displayName": "Client Token",
			"name": "clientToken",
			"type": "string",
			"default": "",
			"description": "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.",
			"routing": {
				"send": {
					"property": "clientToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Service"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Spec",
			"name": "spec",
			"type": "json",
			"default": "{\n  \"provider\": {\n    \"virtualNode\": {},\n    \"virtualRouter\": {}\n  }\n}",
			"description": "An object that represents the specification of a virtual service.",
			"routing": {
				"send": {
					"property": "spec",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Service"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Virtual Service"
					]
				}
			}
		},
		{
			"displayName": "GET /v20190125/tags#resourceArn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The maximum number of tag results returned by <code>ListTagsForResource</code> in paginated output. When this parameter is used, <code>ListTagsForResource</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListTagsForResource</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListTagsForResource</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "The <code>nextToken</code> value returned from a previous paginated <code>ListTagsForResource</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "Resource Arn",
			"name": "resourceArn",
			"required": true,
			"description": "The Amazon Resource Name (ARN) that identifies the resource to list the tags for.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "resourceArn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "PUT /v20190125/tag#resourceArn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "Resource Arn",
			"name": "resourceArn",
			"required": true,
			"description": "The Amazon Resource Name (ARN) of the resource to add tags to.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "resourceArn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {\n    \"value\": {}\n  }\n]",
			"description": "The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "PUT /v20190125/untag#resourceArn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "Resource Arn",
			"name": "resourceArn",
			"required": true,
			"description": "The Amazon Resource Name (ARN) of the resource to delete tags from.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "resourceArn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tag Keys",
			"name": "tagKeys",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The keys of the tags to be removed.",
			"routing": {
				"send": {
					"property": "tagKeys",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
];
