# Image processing API

## Get started

### Install dependencies

```shell
yarn install
```

### Start the API

```shell
yarn start
```

### Run tests

```shell
yarn test
```

## API
Use the provided images to test the API.
`images/redbull-f1.jpeg`

Currently, the api only converts the images to PNG from JPG.

**POST:** 
http://localhost:3000/api/image

Response: 
```json
{
  "image_id": "UUID"
}
```

**GET:**
http://localhost:3000/{image_id}.{extension}

---

## Cloud deployment
Deploying this to the cloud (AWS) could be done in multiple ways. Firstly, all deployments can be deployed via GitHub actions and Terraform. 
Next, the API can be deployed as a Lambda function, or as a container using AWS ECS ideally we'd like to stick to serverless as there's less maintenance.
I would also opt to use AWS S3 to store the images, and use AWS CloudFront to serve the images. This would allow us to scale the API and the images individually, as well as the cost savings involved in using both services.

## Testing suite
Necessary testing like unit & integration would be included for future development. I would also like to see some sort of load test to confirm the performance of the service. 