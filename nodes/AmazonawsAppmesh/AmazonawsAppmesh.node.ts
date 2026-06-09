import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class AmazonawsAppmesh implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Amazonaws Appmesh',
		name: 'N8nDevAmazonawsAppmesh',
		icon: { light: 'file:./amazonaws-appmesh.png', dark: 'file:./amazonaws-appmesh.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'App Mesh uses Envoy proxy for microservice monitoring, control, and standardized communication.',
		defaults: { name: 'Amazonaws Appmesh' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAmazonawsAppmeshApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...defaultDescription
		],
	};
}
