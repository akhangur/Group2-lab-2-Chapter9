window.addEventlistener("load",function()
{var hgelem= document.queryselectorAll('hilightable);
for(i=0;i<hgelem.length;i++)
hgelem[i].addEventlistener("focus",toggle);
hgelem[i].addEventlistener("blur",toggle);

}
})

function toggle(f)
{
	f.classList.remove('highlight');
	f.classList.add('hilightable');
}