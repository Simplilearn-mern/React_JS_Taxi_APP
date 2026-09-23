// Validation functions for taxi booking

export const validateCustomerName = (name) => {
    if (!name || name.trim().length === 0) {
        return "Customer name is required.";
    }
    if (name.trim().length < 2) {
        return "Customer name must be at least 2 characters long.";
    }
    return null; // No error
};

export const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/; // Assuming 10-digit phone number
    if (!phone || phone.trim().length === 0) {
        return "Phone number is required.";
    }
    if (!phoneRegex.test(phone.trim())) {
        return "Phone number must be a valid 10-digit number.";
    }
    return null;
};

export const validatePickupLocation = (location) => {
    if (!location || location.trim().length === 0) {
        return "Pickup location is required.";
    }
    return null;
};

export const validateDropLocation = (location) => {
    if (!location || location.trim().length === 0) {
        return "Drop location is required.";
    }
    return null;
};

export const validateBooking = (booking) => {
    const errors = {};
    errors.customerName = validateCustomerName(booking.customerName);
    errors.phone = validatePhone(booking.phone);
    errors.pickupLocation = validatePickupLocation(booking.pickupLocation);
    errors.dropLocation = validateDropLocation(booking.dropLocation);
    return errors;
};

// Validation functions for login

export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || email.trim().length === 0) {
        return "Email is required.";
    }
    if (!emailRegex.test(email.trim())) {
        return "Please enter a valid email address.";
    }
    return null;
};

export const validatePassword = (password) => {
    if (!password || password.length === 0) {
        return "Password is required.";
    }
    if (password.length < 6) {
        return "Password must be at least 6 characters long.";
    }
    return null;
};

export const validateLogin = (user) => {
    const errors = {};
    errors.email = validateEmail(user.email);
    errors.password = validatePassword(user.password);
    return errors;
};
