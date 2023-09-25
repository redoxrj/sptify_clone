console.log("hello world!");
// setTimeout(()=>{
    //     audioElement.play()
    
    // },3000)
    let songIndex= 0;
    let audioElement= new Audio('songs/1.mp3')
    let masterPlay = document.getElementById('masterPlay');
    let progressBar = document.getElementById('progressBar');
    gif= document.getElementById('gif')
    let songItem = Array.from(document.getElementsByClassName('songItem'))
    let songClass = Array.from(document.getElementsByClassName('songClass'))
    // let masterSongName = getElementById("masterSongName")
    // let info = document.getElementsById('info')
    let info = document.getElementById('info')
    // console.log(document.getElementById('info'))



let songs=[
    {name: 'Cheque',filePath: 'songs/1.mp3',coverpath: 'covers/1.jpg'},
    {name: 'We rollin',filePath: 'songs/2.mp3',coverpath: 'covers/2.jpg'},
    {name: 'Oy hoye',filePath: 'songs/3.mp3',coverpath: 'covers/3.jpg'},
    {name: 'Acha thick',filePath: 'songs/4.mp3',coverpath: 'covers/4.jpg'},
    {name: 'Koi gal na',filePath: 'songs/5.mp3',coverpath: 'covers/5.jpg'},
    {name: 'Jaldi wha se ',filePath: 'songs/6.mp3',coverpath: 'covers/6.jpg'},
]
songItem.forEach((element,i)=>{
    console.log(element,i)
    element.getElementsByTagName('img')[0].src= songs[i].coverpath
    element.getElementsByTagName('span')[0].innerText= songs[i].name

})


masterPlay.addEventListener('click',()=>{
    
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play()
    masterPlay.src='pause-icon.jpg'
    gif.style.opacity=1
    } 
    else{
        audioElement.pause()
    masterPlay.src='play-button.png'
    gif.style.opacity=0


    }
    

})
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate')
    let progress = parseInt(((audioElement.currentTime/audioElement.duration)*100))
    // console.log(progress)
    progressBar.value=progress
})

progressBar.addEventListener('change',()=>{
    audioElement.currentTime = (progressBar.value*audioElement.duration)/100
})

console.log(songClass)

const restplay=()=>{
    songClass.forEach((element)=>{
        element.src='play-button.png'
       
    })

}

songClass.forEach((element)=>{
    element.addEventListener('click',(e)=>{
       
        // console.log(e.target)
        restplay()
        e.target.src='pause-icon.jpg'
        songIndex =parseInt( e.target.id)
        audioElement.src=`songs/${songIndex+1}.mp3`
        audioElement.play()
        audioElement.currentTime=0
        masterPlay.src='pause-icon.jpg'
        masterSongName.innerText =songs[songIndex].name
        // info.innerText = songs[songIndex-1].name



    })
})

document.getElementById('next').addEventListener('click', ()=>{

    if(songIndex>=6){
        songIndex= 1
    }
    else if(songIndex==0 || songIndex==1){
        songIndex+=1
    }
    
    else{
        songIndex+=1

    }
    console.log( songIndex)

    audioElement.src=`songs/${songIndex}.mp3`
        audioElement.play()
        audioElement.currentTime=0
        masterPlay.src='pause-icon.jpg'


})
document.getElementById('previous').addEventListener('click', ()=>{
    console.log( songIndex)

    if(songIndex<0 || songIndex==1){
        songIndex= 1
    }
    
    else{
        songIndex-=1

    }
    console.log( songIndex)

    audioElement.src=`songs/${songIndex}.mp3`
        audioElement.play()
        audioElement.currentTime=0
        masterPlay.src='pause-icon.jpg'


})