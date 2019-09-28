
# EscoltApp Backend - Functions.


## Deploy Functions!

```
gcloud functions deploy helloHttp --runtime nodejs10 --trigger-http
gcloud functions deploy helloPubSub --trigger-topic $FUNCTIONS_TOPIC --runtime nodejs8
gcloud functions deploy helloGCS --runtime nodejs8 --trigger-resource $FUNCTIONS_DELETABLE_BUCKET --trigger-event providers/cloud.storage/eventTypes/object.change
```

## Run the tests


1. Install and run the [Google Cloud Functions Emulator](https://github.com/GoogleCloudPlatform/cloud-functions-emulator)

        npm install -g @google-cloud/functions-emulator
        functions start
