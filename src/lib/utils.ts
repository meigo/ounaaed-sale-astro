export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function getImageIdFromPath(src: string) {
  const id = import.meta.env.DEV
    ? src.substring(src.lastIndexOf("/") + 1, src.lastIndexOf("?")).replace("/", "-")
    : src.substring(8, src.length); // id = folder-filename.ext
  return id;
}

export function getBaseUrl() {
  const isDev = import.meta.env.DEV;
  return isDev ? import.meta.env.DEV_BASEURL : import.meta.env.BASEURL;
}

export function getImageParentPath(path: string) {
  return path.substring(0, path.lastIndexOf("/"));
}

export async function getImagesStaticPathsData(files) {
  const images = files.map((file) => {
    const image = file.default;
    const src = file.default.src;
    const id = getImageIdFromPath(src);

    return {
      params: { id },
      props: { id, image },
    };
  });

  if (images.length > 1) {
    images.forEach((image, index: number) => {
      image.props["prevId"] = index == 0 ? images[images.length - 1].params.id : images[index - 1].params.id;
      image.props["nextId"] = index == images.length - 1 ? images[0].params.id : images[index + 1].params.id;
    });
  }

  return images;
}

export function pauseVideosWhenOutOfView() {
  let videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    let wasVideoPlaying = false;

    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVideoPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;

          if (entry.isIntersecting) {
            if (!isVideoPlaying && wasVideoPlaying) {
              video.play();
            }
          } else {
            if (isVideoPlaying) {
              wasVideoPlaying = true;
              video.pause();
            } else {
              wasVideoPlaying = false;
            }
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(video);
  });
}
