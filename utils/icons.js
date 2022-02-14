const iconsName = routeName => {
  const icons = {
    Scholarships: 'graduation-cap',
    Home: 'home',
    SignUp: 'wpforms',
  };

  return icons[routeName] || 'graduation-cap';
};

export default iconsName;
