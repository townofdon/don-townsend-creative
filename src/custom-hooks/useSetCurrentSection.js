
import { useEffect } from 'react';
import maxBy from 'lodash/maxBy';

export default function useSetCurrentSection({
  id,
  theme,
  setTheme,
  currentSection,
  setCurrentSection,
  calcs,
  scrollPoints,
}) {
  useEffect(() => {
    const isScrollInSection = true
      && calcs.pctProgressSection >= 100
      && calcs.pctProgressSection < 200;

    // get the scrollPoint that has the highest pct AND
    // is currently in view (e.g. window.scrollY is past it).
    const scrollPointMax = maxBy(scrollPoints, scrollPoint => (
      (scrollPoint.pct + 100 <= calcs.pctProgressSection)
        ? scrollPoint.pct
        : 0
    ));

    const isScrollInScrollPoint = true
      && isScrollInSection
      && scrollPointMax
      && scrollPointMax.pct
      && scrollPointMax.pct > 0
      // scrollPoint.pct interprets 0 as the top of the section,
      // whereas pctProgressSection interprets 100 at the top of
      // the viewport.
      // Therefore, pctProgressSection of 100 === scrollPoint.pct of 0.
      && scrollPointMax.pct + 100 <= calcs.pctProgressSection;

    const shouldScrollPointBecomeActive = true
      && isScrollInScrollPoint
      && scrollPointMax.id
      && scrollPointMax.id !== currentSection;

    const shouldSectionBecomeActive = true
      && !isScrollInScrollPoint
      && isScrollInSection
      && id
      && id !== currentSection;

    if (shouldScrollPointBecomeActive) {
      setCurrentSection(scrollPointMax.id);
    }
    if (shouldSectionBecomeActive) {
      setCurrentSection(id);
    }
    if (shouldScrollPointBecomeActive || shouldSectionBecomeActive) {
      if (theme) { setTheme(theme); }
    }
  }, [
    id,
    theme,
    setTheme,
    currentSection,
    setCurrentSection,
    calcs,
    scrollPoints,
  ]);
}
