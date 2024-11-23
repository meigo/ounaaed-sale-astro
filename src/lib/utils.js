import { log } from "node_modules/astro/dist/core/logger/core";

/**
 * @param {string} src
 * @returns {string}
 */
export function getImageIdFromPath(src) {
  const id = import.meta.env.DEV
    ? src.substring(src.lastIndexOf("/") + 1, src.lastIndexOf("?")).replace("/", "-")
    : src.substring(8, src.length); // id = folder-filename.ext
  return id;
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

  images.forEach((image, index) => {
    image.props["prevId"] = index == 0 ? images[images.length - 1].params.id : images[index - 1].params.id;
    image.props["nextId"] = index == images.length - 1 ? images[0].params.id : images[index + 1].params.id;
  });

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
