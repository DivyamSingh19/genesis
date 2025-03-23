from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages

def signup(request):
    print("Rendering signup page")  # Debugging
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')

        print("Received data:", username, email, password1, password2)  # Debugging

        if not username or not email or not password1 or not password2:
            messages.error(request, "All fields are required!")
            return render(request, 'signup.html')

        if password1 != password2:
            messages.error(request, "Passwords do not match!")
            return render(request, 'signup.html')

        if User.objects.filter(username=username).exists():
            messages.error(request, "Username already taken!")
            return render(request, 'signup.html')

        # Create and save user
        user = User.objects.create_user(username=username, email=email, password=password1)
        user.save()
        print("User created successfully!")  # Debugging

        messages.success(request, "Account created successfully!")
        return redirect('login')

    return render(request, 'signup.html')

def login_view(request):
    return render(request, 'login.html')  # Ensure you have login.html
