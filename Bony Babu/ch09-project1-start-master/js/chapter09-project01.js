window.addEventlistener("load",function()
{var hgelem= document.queryselectorAll('hilightable);
for(i=0;i<hgelem.length;i++)
hgelem[i].addEventlistener("focus",toggle);
hgelem[i].addEventlistener("blur",toggle);

}
})

function toggle(f)
{
if(f.type=="focus")
{
	f.target.classList.add('highlight');
	else if(f.type=="blur")
	{
		f.target.classlist.remove('hilightable');
	}
}
}