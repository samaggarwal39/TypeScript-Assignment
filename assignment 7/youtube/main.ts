class YouTubeVideo{

    protected videoId:number;
    protected videoURL:string;
    protected videoTitle:string;
    protected videoViews:number;
    protected videoLikes:number;
    protected videoDislikes:number;
    protected videoPublisherId:number;
    protected transcriptId:number;
    protected videoAbout:any;
    public videoCategory:string;
    public relatedVideosId:number[];


    constructor(videoId:number,videoURL:string,videoTitle:string,videoViews:number,videoLikes:number,
        videoDislikes:number,videoPublisherId:number,transcriptId:number,
        videoCategory:string,videoAbout?:string,relatedVideosId?:any)
    {
        this.videoId = videoId;
        this.videoURL = videoURL;
        this.videoTitle = videoTitle;
        this.videoViews= videoViews;
        this.videoLikes=videoLikes;
        this.videoDislikes=videoDislikes;
        this.videoPublisherId=videoPublisherId;
        this.transcriptId=transcriptId;
        this.videoCategory= videoCategory;
        this.videoAbout= videoAbout;
        this.relatedVideosId = relatedVideosId;
    }

    getVideoTitle=()=>{
        return this.videoTitle;
    }
    getVideoViews=()=>{
        return this.videoViews;
    }
    getVideoLikes=()=>{
        return this.videoLikes;
    }
    getVideoDislikes=()=>{
        return this.videoDislikes;
    }
    getVideoTranscript=()=>{
        return this.transcriptId;
    }
    getVideoCategory=()=>{
        return this.videoCategory;
    }

    getRelatedVideos=()=>{
        return this.relatedVideosId;
    }
    getPublisherId=()=>{
        return this.videoPublisherId;
    }
    setVideoViews=()=>{
        this.videoViews +=1;
    }

    setVideoLikes=()=>{
        this.videoLikes +=1;
    }

    setVideoDislikes=()=>{
        this.videoDislikes +=1;
    }
}//Youtube Video Class.


class EntertainmentTypeVideo extends YouTubeVideo{

    constructor(videoId:number,videoURL:string,videoTitle:string,videoViews:number,videoLikes:number,
        videoDislikes:number,videoPublisherId:number,transcriptId:number,
        videoCategory:string,videoAbout?:string,relatedVideosId?:any)
    {
        super(videoId,videoURL,videoTitle,videoViews,videoLikes,
        videoDislikes,videoPublisherId,transcriptId,videoCategory,videoAbout,relatedVideosId);

    }
}

class MusicTypeVideo extends YouTubeVideo{

    private song:string;
    private artist:string;
    private album:string;
    private writer:string;
    private licensedBy:string;

    constructor(videoId:number,videoURL:string,videoTitle:string,videoViews:number,videoLikes:number,
        videoDislikes:number,videoPublisherId:number,transcriptId:number,
        videoCategory:string,song:string,artist:string,album:string,writer:string,
        licensedBy:string,relatedVideosId?:any,videoAbout?:string)
    {
        super(videoId,videoURL,videoTitle,videoViews,videoLikes,
        videoDislikes,videoPublisherId,transcriptId,videoCategory,videoAbout,relatedVideosId);
        this.song = song;
        this.artist = artist;
        this.album = album;
        this.writer =writer;
        this.licensedBy = licensedBy;
    }

    getLicensedBy=()=>{
        return this.licensedBy;
    }

    getSong=()=>{
        return this.song;
    }

    getArtist=()=>{
        return this.artist;
    }

    getAlbum=()=>{
        return this.licensedBy;
    }

    getWriter=()=>{
        return this.writer;
    }
}

class GamingTypeVideo extends YouTubeVideo{


    private licensedBy:string;

    constructor(videoId:number,videoURL:string,videoTitle:string,videoViews:number,videoLikes:number,
        videoDislikes:number,videoPublisherId:number,transcriptId:number,
        videoCategory:string,licensedBy:string,videoAbout?:string,relatedVideosId?:any)
    {
        super(videoId,videoURL,videoTitle,videoViews,videoLikes,
        videoDislikes,videoPublisherId,transcriptId,videoCategory,videoAbout,relatedVideosId);
        this.licensedBy=licensedBy;
    }

    getLicensedBy=()=>{
        return this.licensedBy;
    }
}

let setOnFire = new MusicTypeVideo(1,"URl","Hello",100,10,5,1,1,"Music","Hello By:Adele"
                ,"Adele","this is acting","Adele","some production",[1,2,3,4,5]);


let gamingVideo = new GamingTypeVideo(2,"URl","Game",100,10,5,6,9,"Gaming","FORTNITE","game",[6,7,8,9,10]);

console.log("Album: "+setOnFire.getAlbum())

console.log("song: "+setOnFire.getSong())

console.log("License: "+setOnFire.getLicensedBy())

console.log("Views: "+setOnFire.getVideoViews())

console.log("Likes: "+setOnFire.getVideoLikes())
setOnFire.setVideoLikes();
console.log("Likes after: "+setOnFire.getVideoLikes())

console.log("Dislikes: "+setOnFire.getVideoDislikes())
setOnFire.setVideoDislikes();
console.log("Dislikes after: "+setOnFire.getVideoDislikes())

console.log("Publisher Id: "+setOnFire.getPublisherId())

console.log("Transcript: "+setOnFire.getVideoTranscript())

console.log("Artist: "+setOnFire.getArtist())

console.log("Related videos: "+setOnFire.getRelatedVideos())

console.log(setOnFire)
console.log(gamingVideo)