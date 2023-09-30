import { ThemeOptions } from '@mui/material/styles'

// Styles Module Declarations
declare module '@mui/material/styles' {

    // Palette Interfaces
    interface Palette {
      appPrimary: Palette['primary'];
      appPrimaryLight: Palette['primary'];
      appTransPrimary: Palette['primary'];
      appButton: Palette['primary'];

    }
    interface PaletteOptions {
      appPrimary: PaletteOptions['primary'];
      appPrimaryLight: PaletteOptions['primary'];
      appTransPrimary: PaletteOptions['primary'];
      appButton: PaletteOptions['primary'];
    }
  }
  
  // Typography Module Declarations
  declare module '@mui/material/Typography' {
    
    interface TypographyPropsColorOverrides {
      appPrimary: true;
    }
    interface TypographyPropsVariantOverrides {
      carouselHeading: true;
      appHeading: true;
      aboutMe: true;
      appSubtitle: true;
      appBody: true;
      appListHeading: true;
      appList: true;
      navCardLabel: true;
      navCardText: true;
      helperText: true;
    }
  }
  
  // TextField Module Declarations
  declare module '@mui/material/TextField' {
    
    interface TextFieldPropsColorOverrides {
      appPrimary: true;
    }
    interface TextFieldPropsVariantOverrides {
      contactForm: true;
    }
  }
  
  // Button Module Declarations
  declare module '@mui/material/Button' {
    
    // Interfaces
    interface ButtonPropsColorOverrides {
      appPrimary: true;
      appPrimaryLight: true;
      appButton: true;
    }
    interface ButtonPropsVariantOverrides {
      appMain: true;
      headerNavLink: true;
      sideNavLink: true;
      navCardLink: true;
      footerLabel: true;
      footerLink: true;
    }
  }
  
  // Toolbar Module Declarations
  declare module '@mui/material/Toolbar' {
    
    // Interfaces
    interface ToolbarPropsVariantOverrides {
      enlarged: true;
      reduced: true;
      auto: true;
    }
  }