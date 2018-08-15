var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var YouTubeVideo = /** @class */ (function () {
    function YouTubeVideo(videoId, videoURL, videoTitle, videoViews, videoLikes, videoDislikes, videoPublisherId, transcriptId, videoCategory, videoAbout, relatedVideosId) {
        var _this = this;
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getVideoViews = function () {
            return _this.videoViews;
        };
        this.getVideoLikes = function () {
            return _this.videoLikes;
        };
        this.getVideoDislikes = function () {
            return _this.videoDislikes;
        };
        this.getVideoTranscript = function () {
            return _this.transcriptId;
        };
        this.getVideoCategory = function () {
            return _this.videoCategory;
        };
        this.getRelatedVideos = function () {
            return _this.relatedVideosId;
        };
        this.getPublisherId = function () {
            return _this.videoPublisherId;
        };
        this.setVideoViews = function () {
            _this.videoViews += 1;
        };
        this.setVideoLikes = function () {
            _this.videoLikes += 1;
        };
        this.setVideoDislikes = function () {
            _this.videoDislikes += 1;
        };
        this.videoId = videoId;
        this.videoURL = videoURL;
        this.videoTitle = videoTitle;
        this.videoViews = videoViews;
        this.videoLikes = videoLikes;
        this.videoDislikes = videoDislikes;
        this.videoPublisherId = videoPublisherId;
        this.transcriptId = transcriptId;
        this.videoCategory = videoCategory;
        this.videoAbout = videoAbout;
        this.relatedVideosId = relatedVideosId;
    }
    return YouTubeVideo;
}()); //Youtube Video Class.
var EntertainmentTypeVideo = /** @class */ (function (_super) {
    __extends(EntertainmentTypeVideo, _super);
    function EntertainmentTypeVideo(videoId, videoURL, videoTitle, videoViews, videoLikes, videoDislikes, videoPublisherId, transcriptId, videoCategory, videoAbout, relatedVideosId) {
        return _super.call(this, videoId, videoURL, videoTitle, videoViews, videoLikes, videoDislikes, videoPublisherId, transcriptId, videoCategory, videoAbout, relatedVideosId) || this;
    }
    return EntertainmentTypeVideo;
}(YouTubeVideo));
var MusicTypeVideo = /** @class */ (function (_super) {
    __extends(MusicTypeVideo, _super);
    function MusicTypeVideo(videoId, videoURL, videoTitle, videoViews, videoLikes, videoDislikes, videoPublisherId, transcriptId, videoCategory, song, artist, album, writer, licensedBy, relatedVideosId, videoAbout) {
        var _this = _super.call(this, videoId, videoURL, videoTitle, videoViews, videoLikes, videoDislikes, videoPublisherId, transcriptId, videoCategory, videoAbout, relatedVideosId) || this;
        _this.getLicensedBy = function () {
            return _this.licensedBy;
        };
        _this.getSong = function () {
            return _this.song;
        };
        _this.getArtist = function () {
            return _this.artist;
        };
        _this.getAlbum = function () {
            return _this.licensedBy;
        };
        _this.getWriter = function () {
            return _this.writer;
        };
        _this.song = song;
        _this.artist = artist;
        _this.album = album;
        _this.writer = writer;
        _this.licensedBy = licensedBy;
        return _this;
    }
    return MusicTypeVideo;
}(YouTubeVideo));
var GamingTypeVideo = /** @class */ (function (_super) {
    __extends(GamingTypeVideo, _super);
    function GamingTypeVideo(videoId, videoURL, videoTitle, videoViews, videoLikes, videoDislikes, videoPublisherId, transcriptId, videoCategory, licensedBy, videoAbout, relatedVideosId) {
        var _this = _super.call(this, videoId, videoURL, videoTitle, videoViews, videoLikes, videoDislikes, videoPublisherId, transcriptId, videoCategory, videoAbout, relatedVideosId) || this;
        _this.getLicensedBy = function () {
            return _this.licensedBy;
        };
        _this.licensedBy = licensedBy;
        return _this;
    }
    return GamingTypeVideo;
}(YouTubeVideo));
var setOnFire = new MusicTypeVideo(1, "URl", "Hello", 100, 10, 5, 1, 1, "Music", "Hello By:Adele", "Adele", "this is acting", "Adele", "some production", [1, 2, 3, 4, 5]);
var gamingVideo = new GamingTypeVideo(2, "URl", "Game", 100, 10, 5, 6, 9, "Gaming", "FORTNITE", "game", [6, 7, 8, 9, 10]);
console.log("Album: " + setOnFire.getAlbum());
console.log("song: " + setOnFire.getSong());
console.log("License: " + setOnFire.getLicensedBy());
console.log("Views: " + setOnFire.getVideoViews());
console.log("Likes: " + setOnFire.getVideoLikes());
setOnFire.setVideoLikes();
console.log("Likes after: " + setOnFire.getVideoLikes());
console.log("Dislikes: " + setOnFire.getVideoDislikes());
setOnFire.setVideoDislikes();
console.log("Dislikes after: " + setOnFire.getVideoDislikes());
console.log("Publisher Id: " + setOnFire.getPublisherId());
console.log("Transcript: " + setOnFire.getVideoTranscript());
console.log("Artist: " + setOnFire.getArtist());
console.log("Related videos: " + setOnFire.getRelatedVideos());
console.log(setOnFire);
console.log(gamingVideo);
