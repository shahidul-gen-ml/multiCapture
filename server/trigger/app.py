import requests

url = 'http://localhost:5000/capture-video'


def capture_video():
    try:
        response = requests.post(url)
        if response.status_code == 200:
            print('Video captured!')
        else:
            print('Error capturing video')
    except requests.exceptions.RequestException as e:
        print('Error capturing video:', e)


# Call the capture_video function when the button is clicked
capture_video()
