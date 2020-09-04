import {Component, NgZone} from '@angular/core';
import {IonicPage, NavController, NavParams, ActionSheetController} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {Base64} from '@ionic-native/base64';
import {ApiProvider} from "../../providers/api/api";
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@ionic-native/camera-preview';

/**
 * Generated class for the SendpicturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-sendpicture',
    templateUrl: 'sendpicture.html',
})
export class SendpicturePage {
    events: any = {};
    fullname: any = "";
    email: any = "";
    message: any = "";

    showPreviewOverlay: Boolean = false;
    cameraStarted: boolean = false;
    pictureTaken: boolean = false;
    base64Image: any;
    index: any;

    picturesView = [
        {
            placeholder: 'picturetemplate/pic1.png',
            type: 'right_face',
        },
        {
            placeholder: 'picturetemplate/pic2.png',
            type: 'front_face'
        },
        {
            placeholder: 'picturetemplate/pic3.png',
            type: 'front_face_2'
        },
        {
            placeholder: 'picturetemplate/pic4.png',
            type: 'teeth1'
        },
        {
            placeholder: 'drnormandlogo.png',
            type: 'center_logo'
        },
        {
            placeholder: 'picturetemplate/pic5.png',
            type: 'teeth2'
        },
        {
            placeholder: 'picturetemplate/pic6.png',
            type: 'teeth3'
        },
        {
            placeholder: 'picturetemplate/pic7.png',
            type: 'teeth4'
        },
        {
            placeholder: 'picturetemplate/pic8.png',
            type: 'teeth5'
        }
    ];


    constructor(
        public navCtrl: NavController,
        public ngZone: NgZone,
        public navParams: NavParams,
        public camera: Camera,
        private base64: Base64,
        public api: ApiProvider,
        private iab: InAppBrowser,
        public actionSheetController: ActionSheetController,
        public cameraPreview: CameraPreview
    ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SendpicturePage');
    }

    openLink = () => {
        try {
            const browser = this.iab.create('https://orthodontistemontreal.com/video1', '_blank', 'location=no');
            browser.show();
        } catch (e) {
            
        }
    }

    sendMessage() {
        var pictures = [];
        this.picturesView.map((data: any) => {
            if (data.imgFile) {
                pictures.push({
                    picture: data.imgFile,
                    type: "image/png",
                    view_type: data.type,
                });
            }
        });

        var postData = {
            name: this.fullname,
            email: this.email,
            message: this.message,
            pictures: pictures
        };

        this.api.loading();
        this.api.postRequest(ApiProvider.METHODS.SENDEMAIL, postData).then((data: any) => {
            this.api.hideLoading();
            if (data && data.status) {
                console.log(data.status + "::abcd");
                console.log(data.data); // data received by server
                console.log(data.headers);
                this.api.showToast(data.message);
                // this.navCtrl.pop();

                this.ngZone.run(() => {
                    this.fullname = "";
                    this.email = "";
                    this.message = "";
                    this.picturesView.map((data: any) => {
                        data.imgFile = null;
                    });
                });

            } else {
                this.api.showToast(data.message);
            }
        }).catch((error) => {
            this.api.hideLoading();
            console.log(error.status + "::efgh");
            console.log(error.error); // error message as string
            console.log(error.headers);
            this.api.showToast(error.message);
        });
    }

    showActionSheet(i) {
        console.log("Show action sheet now.");
        this.index = i;
        const actionSheet = this.actionSheetController.create({
            title: 'Choose option',
            buttons: [
                { 
                    text: 'Camera',
                    handler: () => {
                        this.startPicturePreview();
                        console.log('Camera clicked');
                    }
                },
                {
                    text: 'Photo Library',
                    handler: () => {
                        console.log('PHOTO LIBRARY clicked');
                        this.pickPhoto();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });

        actionSheet.present();
    }

    startPicturePreview() {
        console.log("Take preview picture now.");
        console.log(this.cameraPreview);
        
        const cameraPreviewOpts: CameraPreviewOptions = {
            x: 0,
            y: 100,
            width: window.screen.width,
            height: window.screen.width,
            camera: 'rear',
            tapPhoto: false,
            previewDrag: false,
            toBack: true,
            alpha: 1
        }
    
        this.showPreviewOverlay = true;
        this.cameraPreview.startCamera(cameraPreviewOpts).then(
            (res) => {
                console.log(res);
            }, (err) => {
                console.error(err);
            }
        );
        console.log("Camera ready.");
    }

    takePicturePreview() {
        console.log("Take picture now");
        console.log(this.cameraPreview);
    
        const pictureOpts: CameraPreviewPictureOptions = {
          width: 500,
          height: 500,
          quality: 30
        }
    
        this.cameraPreview.takePicture(pictureOpts).then(
          (imageData) => {
            console.log("test message here");
            console.log(imageData);
            this.base64Image = "data:image/jpeg;base64," + imageData;
            
            console.log("picture should be taken at this point.");
            console.log("Picture URI:" + this.base64Image);
            this.cameraPreview.stopCamera();
            this.cameraStarted = false;
            this.pictureTaken = true;
          }, (err) => {
            console.error(err);
        });
    }

    confirmPhoto() {
        console.log("User choose to use this photo.")
        this.showPreviewOverlay = false;
        this.picturesView[this.index]['imgFile'] = this.base64Image;
        this.pictureTaken = false;
        this.base64Image = "";
    }

    retakePhoto() {        
        const cameraPreviewOpts: CameraPreviewOptions = {
            x: 0,
            y: 100,
            width: window.screen.width,
            height: window.screen.width,
            camera: 'rear',
            tapPhoto: false,
            previewDrag: false,
            toBack: true,
            alpha: 1
        }

        console.log("User choose to retake the photo.");
        this.showPreviewOverlay = true;
        this.pictureTaken = false;
        this.base64Image = "";
        this.cameraPreview.startCamera(cameraPreviewOpts).then(
            (res) => {
                console.log(res);
            }, (err) => { 
                console.error(err);
            }
        );
    }

    cancelCamera() {
        this.cameraPreview.stopCamera().then(
            (res) => {
                console.log("User canceled taking photo. Stopping camera.");
                this.showPreviewOverlay = false;
            }, (err) => {
                console.log("Error stopping camera: " + err);
            }
        );
    }

    pickPhoto() {      
        console.log("pick a photo from gallery."); 
        const options: CameraOptions = {
            quality: 30,
            targetWidth: 500,
            targetHeight: 500,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            mediaType: this.camera.MediaType.PICTURE,
            encodingType: this.camera.EncodingType.PNG
        };

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            // this.base64.encodeFile(imageData).then((base64File: string) => {
            //     let base64Image = 'data:image/jpeg;base64,' + base64File;
            //     this.imgfile = base64Image;
            // }, (err) => {
            //     console.log(err);
            // });
            let galleryImage = 'data:image/png;base64,' + imageData;
            this.picturesView[this.index]['imgFile'] = galleryImage;

            // this.imgfile = base64Image;
        }, (err) => {
            console.error(err);
            // Handle error
        });
    }
}

/* 
    capturePhotoForView(data, index) {
        this.takePicture((base64Image) => {
            this.picturesView[index]['imgFile'] = base64Image;
        });
    }

    takePicture = (callBack) => {
        const actionSheet = this.actionSheetController.create({
            title: 'Choose option',
            buttons: [
                {
                    text: 'Camera',
                    handler: () => {
                        this.pickPhoto(this.camera.PictureSourceType.CAMERA, callBack);
                        console.log('Camera clicked');
                    }
                },
                {
                    text: 'Photo Library',
                    handler: () => {
                        this.pickPhoto(this.camera.PictureSourceType.SAVEDPHOTOALBUM, callBack);
                        console.log('PHOTO LIBRARY clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }

    pickPhoto(sourceType, callBack) {
        const options: CameraOptions = {
            quality: 30,
            targetWidth: 500,
            targetHeight: 500,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: sourceType,
            mediaType: this.camera.MediaType.PICTURE,
            encodingType: this.camera.EncodingType.PNG
        };

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            // this.base64.encodeFile(imageData).then((base64File: string) => {
            //     let base64Image = 'data:image/jpeg;base64,' + base64File;
            //     this.imgfile = base64Image;
            // }, (err) => {
            //     console.log(err);
            // });
            let base64Image = 'data:image/png;base64,' + imageData;
            if (callBack) {
                callBack(base64Image);
            }
            // this.imgfile = base64Image;
        }, (err) => {
            console.error(err);
            // Handle error
        });
    } */
