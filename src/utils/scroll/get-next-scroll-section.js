
/**
 * Get the next scroll-section node.
 * @param {String} currentSectionId
 * @returns {Node}
 */
export default function getNextScrollSection(currentSectionId) {
  const scrollSections = document.getElementsByClassName('scroll-section') || [];

  if (!currentSectionId) {
    return scrollSections[0];
  }

  for (let i = 0; i < scrollSections.length; i++) {
    const isCurrentSection = false
      || scrollSections[i].id === currentSectionId
      || scrollSections[i].id === `section-${currentSectionId}`;
    const isLastSection = i === scrollSections.length - 1;
    if (isCurrentSection && !isLastSection) {
      return scrollSections[i + 1];
    }
    if (isCurrentSection || isLastSection) {
      return scrollSections[i];
    }
  }
  return null;
}
