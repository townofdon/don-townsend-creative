
export default function debugScrollSection(debug, scrollProps, calcs) {
  if (debug && process.env.NODE_ENV === 'development') {
    console.table(
      calcs.position,
    );
  }
}
