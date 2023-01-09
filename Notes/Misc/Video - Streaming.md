## Video - Streaming

HTTP Live Streaming

HTTP Live Streaming (HLS) is a streaming protocol used to deliver video content over the internet. In HLS, the video content is broken into a series of small segments, typically a few seconds long. These segments are stored on a server and are made available for streaming to viewers. The segments are usually stored in a container format such as MP4 or TS (MPEG Transport Stream), and they are delivered to viewers using the HTTP protocol.

To prepare the video for streaming using HLS, the video content is first encoded and segmented into small chunks. These chunks are then stored on a web server and made available for streaming to viewers through a playlist file, which is a simple text file that lists the URLs of the individual chunks. The playlist file is usually in the M3U8 format, and it is served over HTTP to the viewer's device, which uses the playlist to request and receive the individual chunks of video data.

So to answer your question, in HLS the video is not stored in HTTP chunks, but rather in small segments that are stored on a web server and delivered to the viewer using the HTTP protocol.