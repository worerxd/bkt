const iconsName = routeName => {
  const icons = {
    Scholarships: 'graduation-cap',
    Home: 'home',
    SignUp: 'wpforms',
    Pending: 'edit',
  };

  return icons[routeName] || 'graduation-cap';
};

export default iconsName;
