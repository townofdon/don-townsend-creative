
export default function debugScrollSection(debug, scrollProps, calcs) {
  if (debug && process.env.NODE_ENV === 'development') {
    console.log(
      calcs.pctProgressSection,
      calcs.isSectionInView,
      calcs.isScrollInSection,
    );
  }
}
